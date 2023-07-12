import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {IMG} from '../../constants';

import styles from './styles';
import {
  InputData,
  ItemDaftarContak,
  TextInputPencarian,
} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {isInternetConnected} from '../../utils/internet-connectivity';
import {getServiceAPI} from '../../services';
import {setContact} from '../../data';
import axios from 'axios';

const HomeScreen = (props: any) => {
  const {navigation} = props;
  const [backgroundColorHome, setBackgroundColorHome] = useState({
    backgroundColor: 'blue',
  });
  const [backgroundColorAdd, setBackgroundColorAdd] = useState({
    backgroundColor: 'white',
  });
  const [isCheckedHome, setIsCheckedHome] = useState(true);
  const [isCheckedAdd, setIsCheckedAdd] = useState(false);
  const [valueTextInputPencarian, setValueTextInputPencarian] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [photo, setphoto] = useState('');
  const [dataFilter, setdataFilter]: any[] = useState([]);
  const [isNotFilter, setIsNotFilter]: any[] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();

  const onChangeTextInputPencarian = (text: string) => {
    setValueTextInputPencarian(text);
  };

  const onSubmitTextInputPencarian = (text: string) => {
    filterContakBerdasarkanPencarian(text);
  };

  const onCancelTextInputPencarian = () => {
    setValueTextInputPencarian('');
    setIsNotFilter(true);
  };

  const pilihHome = () => {
    setBackgroundColorHome({backgroundColor: 'blue'});
    setBackgroundColorAdd({backgroundColor: 'white'});
    setIsCheckedHome(true);
    setIsCheckedAdd(false);
  };

  const pilihAdd = () => {
    setBackgroundColorHome({backgroundColor: 'white'});
    setBackgroundColorAdd({backgroundColor: 'blue'});
    setIsCheckedHome(false);
    setIsCheckedAdd(true);
  };

  const data = useSelector((state: any) => state.contact.data);

  const onClikDetail = (item: any) => {
    navigation.navigate('NAVIGATION_EDIT', {item});
  };

  const onPressTambah = async () => {
    setisLoading(true);
    if (await isInternetConnected()) {
      try {
        axios.post('https://contact.herokuapp.com/contact',
            {
              firstName: firstName,
              lastName: lastName,
              age: Number(age),
              photo: photo,
            },
            {
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            },
          )
          .then(async res => {
            const respon = await getServiceAPI()!!.getContact({});
            dispatch(setContact(respon.data));
            Alert.alert('Data sukses di tambah');
            setisLoading(false);
          })
          .catch(err => {
            console.log(err);
            setisLoading(false);
          });
       
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        Alert.alert(`Yah terdapat error ${err}`);
      }
    } else {
      setisLoading(false);
      Alert.alert(`Sepertinnya terdapat Masalah dengan koneksi jaringannya nih`);
    }
  };

  const onChangeImage = (item: any) => {
    setphoto(item);
  };

  const onChangeUmur = (item: any) => {
    setage(item);
  };

  const onChangeNamaBelakang = (item: any) => {
    setlastName(item);
  };

  const onChangeNameDepan = (item: any) => {
    setfirstName(item);
  };

  const filterContakBerdasarkanPencarian = (kunci: any) => {
    setdataFilter([]);
    let listKategoriTerFilter: any[] = [];
    data.forEach(
      (element: {firstName: string; lastName: string; age: number}) => {
        if (
          element.firstName.toLowerCase().includes(kunci.toLowerCase()) ||
          element.lastName.toLowerCase().includes(kunci.toLowerCase()) ||
          element.age.toString().toLowerCase().includes(kunci.toLowerCase())
        ) {
          listKategoriTerFilter.push(element);
        }
      },
    );
    if (listKategoriTerFilter.length === 0) {
      setIsNotFilter(true);
    } else {
      setIsNotFilter(false);
      setdataFilter(listKategoriTerFilter);
    }
  };
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewInner}>
        <View style={styles.viewHeader}>
          <View>
            <TextInputPencarian
              placeholder="Cari Nomernya                                               "
              value={valueTextInputPencarian}
              onChangeText={onChangeTextInputPencarian}
              onSubmit={onSubmitTextInputPencarian}
              onCancel={onCancelTextInputPencarian}
              style={{marginTop: 5}}
            />
          </View>
        </View>
        <ScrollView style={{marginBottom: 110}}>
          {isCheckedHome ? (
            <>
              {isNotFilter
                ? data.map((x: any, index: any) => (
                    <View key={index}>
                      <TouchableOpacity onPress={() => onClikDetail(x)}>
                        <ItemDaftarContak
                          photo={x.photo}
                          firstName={x.firstName}
                          lastName={x.lastName}
                          age={x.age}
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                : dataFilter.map((x: any, index: any) => (
                    <View key={index}>
                      <TouchableOpacity onPress={() => onClikDetail(x)}>
                        <ItemDaftarContak
                          photo={x.photo}
                          firstName={x.firstName}
                          lastName={x.lastName}
                          age={x.age}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
            </>
          ) : (
            // <View
            //   style={{
            //     backgroundColor: '',
            //     display: 'flex',
            //     flex: 1,
            //     height: 400,
            //   }}>
            //   <View style={styles.viewContent}>
            //     <Text style={styles.textMasukAtas}>Tambah data</Text>
            //     <View>
            //       <InputData
            //         placeholder="Nama Depan"
            //         onChangeText={onChangeNameDepan}
            //         keyboardType={'default'}
            //       />
            //       <InputData
            //         placeholder="Nama Belakang"
            //         keyboardType={'phone-pad'}
            //         onChangeText={onChangeNamaBelakang}
            //       />
            //       <InputData
            //         placeholder="Umur"
            //         keyboardType={'phone-pad'}
            //         onChangeText={onChangeUmur}
            //       />
            //       <InputData
            //         placeholder="Image"
            //         onChangeText={onChangeImage}
            //       />
            //     </View>
            //     <TouchableOpacity
            //       onPress={onPressTambah}
            //       style={styles.viewMasuk}>
            //       <Text style={styles.textMasuk}>Tambah</Text>
            //     </TouchableOpacity>
            //     <View />
            //   </View>
            // </View>
            <View style={styles.viewContentTambah}>
              <Text style={styles.textMasukAtastambah}>Tambah Nomer</Text>
              <View>
                <InputData
                  placeholder="Nama Depan"
                  onChangeText={onChangeNameDepan}
                  // value={namaDepan}
                />
                <InputData
                  placeholder="Nama Belakang"
                  onChangeText={onChangeNamaBelakang}
                  // value={namaBelakang}
                />
                <InputData
                  placeholder="Umur"
                  onChangeText={onChangeUmur}
                  // value={age}
                />
                <InputData
                  placeholder="Image"
                  onChangeText={onChangeImage}
                  // value={image}
                />
              </View>
              <TouchableOpacity
                onPress={onPressTambah}
                style={styles.viewMasuktambah}>
                <Text style={styles.textMasuk}>Tambah</Text>
              </TouchableOpacity>
              <View />
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.cardViewPilihContent}>
        <TouchableWithoutFeedback onPress={pilihHome}>
          <View
            style={[
              styles.viewItemContent,
              {backgroundColor: backgroundColorHome.backgroundColor},
            ]}>
            <Image
              source={IMG.LOGO}
              resizeMode="contain"
              style={styles.imgLogoContent}
            />
            {isCheckedHome && <Text style={styles.textLabelContent}>Home</Text>}
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={pilihAdd}>
          <View
            style={[
              styles.viewItemContent,
              {backgroundColor: backgroundColorAdd.backgroundColor},
            ]}>
            <Image
              source={IMG.LOGO}
              resizeMode="contain"
              style={styles.imgLogoContent}
            />
            {isCheckedAdd && <Text style={styles.textLabelContent}>Add</Text>}
          </View>
        </TouchableWithoutFeedback>
      </View>
      {isLoading && (
        <View style={styles.viewContainerActivityIndicator}>
          <ActivityIndicator color="red" size={80} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
