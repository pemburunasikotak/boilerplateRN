import {COLORS} from '../../constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  imgLogo: {
    height: 180,
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textJudul: {
    fontSize: 30,
    color: COLORS.PUTIH,
    alignSelf: 'center',
  },
  viewLogo: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewFooter: {
    alignContent: 'flex-end',
    flex: 0.5,
    justifyContent: 'center',
  },
  textVersion: {
    alignSelf: 'center',
    color: COLORS.BIRU_TUA,
  },
});
export default styles;
