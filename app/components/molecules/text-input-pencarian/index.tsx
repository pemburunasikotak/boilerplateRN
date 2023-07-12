import React from 'react';
import {View, Image, TextInput, TouchableWithoutFeedback} from 'react-native';
import {IMG} from '../../../constants';
import styles from './styles';

const TextInputPencarian = (props: any) => {
  const {placeholder, value, onChangeText, onSubmit, onCancel, keyboardType} =
    props;
  return (
    <View style={[props.style, styles.cardViewPencarian]}>
      <Image
        source={IMG.ICON_PENCARIAN}
        style={styles.imgIconPencarian}
        resizeMode="contain"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={event => onSubmit(event.nativeEvent.text)}
        numberOfLines={1}
        style={styles.textInputPencarian}
      />
      <View style={styles.viewBtnBatalkanPencarian}>
        <TouchableWithoutFeedback onPress={onCancel}>
          <Image
            source={IMG.ICON_BATALKAN_PENCARIAN}
            style={styles.imgIconBatalkanPencarian}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default TextInputPencarian;
