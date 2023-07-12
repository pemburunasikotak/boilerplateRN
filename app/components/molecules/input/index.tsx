import {
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React from 'react';
  
  const InputData = (props: any) => {
    const {
      placeholder,
      value,
      keyboardType,
      onChangeText,
      onSubmit,
      onCancel,
      img,
      secureTextEntry,
      editTable,
      defaultValue,
    } = props;
    return (
      <View style={[props.style, styles.cardViewPencarian]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          returnKeyType="search"
          onSubmitEditing={event => onSubmit(event.nativeEvent.text)}
          numberOfLines={1}
          editable={editTable}
          secureTextEntry={secureTextEntry}
          style={styles.textInputPencarian}
          defaultValue={defaultValue}
        />
        {/* <View style={styles.viewBtnBatalkanPencarian}>
          <TouchableWithoutFeedback onPress={onCancel}>
            <Image source={img} style={styles.imgIcon} resizeMode="contain" />
          </TouchableWithoutFeedback>
        </View> */}
      </View>
    );
  };
  
  export default InputData;
  
  const styles = StyleSheet.create({
    cardViewPencarian: {
      height: 38,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      elevation: 5,
      borderRadius: 12,
      marginTop: 15,
      backgroundColor: '#66B2FF',
    },
  
    imgIconPencarian: {
      width: 25,
      height: 25,
    },
  
    textInputPencarian: {
      marginLeft: 5,
      fontSize: 15,
    },
  
    viewBtnBatalkanPencarian: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  
    imgIcon: {
      width: 20,
      height: 20,
    },
  });
  