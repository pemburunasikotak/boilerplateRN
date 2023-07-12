import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {IMG} from '../../constants';
import {isInternetConnected} from '../../utils/internet-connectivity';
import {getServiceAPI} from '../../services/api';
import {InputData} from '../../components';
import styles from './styles';
import {setContact} from '../../data';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const EditScreen = (props: any) => {
  const {navigation} = props;
  const item = props.route.params.item;
  const [namaDepan, setNamaDepan] = useState<String>(item.firstName);
  const [namaBelakang, setNamaBelakang] = useState<String>(item.lastName);
  const [age, setage] = useState<String>(item.age.toString());
  const [image, setIamge] = useState<String>(item.photo);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false)

  const onChangeNameDepan = (item: any) => {
    setNamaDepan(item);
  };
  const onChangenamaBelakang = (item: any) => {
    setNamaBelakang(item);
  };
  const onChangeUmur = (item: any) => {
    setage(item);
  };
  const onChangeImage = (item: any) => {
    setIamge(item);
  };

  const onPressBtnBack = () => {
    navigation.goBack();
  };
  const onPressBtnUpdate = async () => {
    setisLoading(true)
    if (await isInternetConnected()) {
      try {
        const payload = {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          params: {
            id: item.id,
          },
          body: {
            firstName: namaDepan,
            lastName: namaBelakang,
            age: Number(age),
            photo: image,
          },
        };
        const res = await getServiceAPI().EditContact(payload);
        setisLoading(false)
        if (res) {
          const respon = await getServiceAPI()!!.getContact({});
          dispatch(setContact(respon.data));
          Alert.alert('Sukses Update data');
        }
      } catch (err) {
        setisLoading(false)
        Alert.alert(`Yah terdapat error ${err}`);
      }
    } else {
        setisLoading(false)
        Alert.alert(`Sepertinnya terdapat Masalah dengan koneksi jaringannya nih`,);
    }
  };
  const onPressBtnHapus = async () => {
    setisLoading(true)
    if (await isInternetConnected()) {
      try {
        axios.delete(`https://contact.herokuapp.com/contact/id${item.id}`,
            {headers: {'Content-Type': 'application/json; charset=utf-8',},},
          )
          .then(async res => {
            const respon = await getServiceAPI()!!.getContact({});
            dispatch(setContact(respon.data));
            Alert.alert('Data sukses di hapus');
            setisLoading(false);
            navigation.navigate('NAVIGATION_HOME')
          })
          .catch(err => {
            console.log(err);
            Alert.alert('Yah lagi ada masalah nih!!');
            setisLoading(false);
          });
        // const payload = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //   },
        //   params: {
        //     id: item.id,
        //   },
        // };
        // const res = await getServiceAPI().deleteContact(payload);
        // setisLoading(false)
        // if (res) {
        //   const respon = await getServiceAPI()!!.getContact({});
        //   dispatch(setContact(respon.data));
        //   Alert.alert('Sukses Delete data');
        // }
      } catch (err) {
        setisLoading(false)
        Alert.alert(`Yah terdapat error ${err}`);
      }
    } else {
      Alert.alert(`Sepertinnya terdapat Masalah dengan koneksi jaringannya nih`);
    }
  };
  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        source={IMG.LOGO}
        resizeMode="cover"
        style={styles.image}
      />
      <ScrollView style={styles.viewScrool}>
        <View style={styles.viewContent}>
          <Text style={styles.textMasukAtas}>Detail</Text>
          <View>
            <InputData
              placeholder="Nama Depan"
              onChangeText={onChangeNameDepan}
              value={namaDepan}
            />
            <InputData
              placeholder="Nama Belakang"
              onChangeText={onChangenamaBelakang}
              value={namaBelakang}
            />
            <InputData
              placeholder="Umur"
              onChangeText={onChangeUmur}
              value={age}
            />
            <InputData
              placeholder="Image"
              onChangeText={onChangeImage}
              value={image}
            />
          </View>
          <TouchableOpacity onPress={onPressBtnUpdate} style={styles.viewMasuk}>
            <Text style={styles.textMasuk}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressBtnHapus}
            style={[styles.viewMasuk, {marginTop: 0, backgroundColor: 'red'}]}>
            <Text style={styles.textMasuk}>Hapus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressBtnBack}>
            <Text style={styles.textMasuk}>Kembali</Text>
          </TouchableOpacity>
          <View />
        </View>
      </ScrollView>
      {isLoading && (
        <View style={styles.viewContainerActivityIndicator}>
          <ActivityIndicator
            color='red'
            size={80}
          />
        </View>
      )}
    </View>
  );
};

export default EditScreen;
