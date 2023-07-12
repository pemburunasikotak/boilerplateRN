import {COLORS} from '../../constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: COLORS.BIRU,
  },
  image: {
    height: '70%',
  },
  viewContent: {
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.PUTIH,
    borderRadius: 15,
    elevation: 7,
  },
  viewScrool: {
    marginTop: -400,
  },
  viewMasuk: {
    backgroundColor: COLORS.KUNING,
    margin: 16,
    padding: 16,
    borderRadius: 15,
    elevation: 7,
  },
  textMasuk: {
    textAlign: 'center',
    color: '#00695C',
  },
  viewFooter: {
    justifyContent: 'center',
  },
  textBelumPunya: {
    alignSelf: 'center',
  },
  textDaftar: {
    color: COLORS.BIRU,
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: 5,
    // fontFamily: 'Roboto-Medium',
  },
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
    marginHorizontal: 15,
    backgroundColor: COLORS.BIRU_MUDA,
  },
  textInputPencarian: {
    marginLeft: 5,
    fontSize: 15,
  },
  textMasukAtas: {
    textAlign: 'center',
    color: COLORS.BIRU_TUA,
    fontWeight: '700',
    fontSize: 18,
  },
  viewContainerActivityIndicator: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
