import React, { useState } from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
// import { IMG } from 'constants/image';
import { IMG } from '../../../constants/image';

const ItemDaftarContak = (props: any) => {
  const {
    photo,
    firstName,
    lastName,
    age,
  } = props;
  let dataPhoto = ""
  if(photo.toLowerCase().includes('http')){
    dataPhoto = photo
  }else{
    dataPhoto="http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
  }
  const [gambar, setGambar] = useState({uri: dataPhoto});
  const loadDefault = () => {
    setGambar(IMG.LOGO);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={gambar}
          onError={loadDefault}
          resizeMode="cover"
          style={styles.imgLogoPT}
        />
      </View>
      <View style={{padding:10}}>
        <View>
          <Text style={{fontSize:16, fontWeight:'600'}}>{firstName} {lastName}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Text style={[styles.value,{width:120}]}>Nama Depan</Text>
          <Text style={styles.value}>{firstName}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Text style={[styles.value,{width:120}]}>Nama Belakang</Text>
          <Text style={styles.value}>{lastName}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Text style={[styles.value,{width:120}]}>Umur</Text>
          <Text style={styles.value}>{age}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDaftarContak;
