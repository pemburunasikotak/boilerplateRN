/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Config} from '../../libraries';
import ApiRequest from 'services/api/config';
import {isInternetConnected} from 'utils/internet-connectivity';
// import API from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import {getServiceAPI} from '../../services';
import {setContact} from '../../data';
import {IMG} from '../../constants/image';

const DemoScreen = (props:any) => {
  const {navigation} = props
  // const data = useSelector((state: any) => state.contact.data);
  const dispatch = useDispatch();

  const fatchdata = async () => {
    try {
      const res = await getServiceAPI()!!.getContact({});
      dispatch(setContact(res.data));
      navigation.navigate('NAVIGATION_HOME')
    } catch (err) {
      return Promise.resolve(err);
    }
  };
  useEffect(() => {
    fatchdata();
  }, []);

  return (
    <View style={styles.viewContainer}>
      <StatusBar backgroundColor="#3ba4ff" barStyle="dark-content" />
      <View style={styles.viewLogo}>
        <Image
          resizeMode={'contain'}
          source={IMG.LOGO}
          style={styles.imgLogo}
        />
      </View>
      <View style={styles.viewFooter}>
        <Text style={styles.textVersion}>Version :0.0.1</Text>
      </View>
    </View>
  );
};

export default DemoScreen;
