import {StyleSheet} from 'react-native';

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
    borderRadius: 20,
    backgroundColor: 'white',
  },

  imgIconPencarian: {
    width: 25,
    height: 25,
  },

  textInputPencarian: {
    marginLeft: 5,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
  },

  viewBtnBatalkanPencarian: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  imgIconBatalkanPencarian: {
    width: 20,
    height: 20,
  },
});

export default styles;
