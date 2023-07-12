import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';
// import {fonts} from '@app/asset';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginBottom:10,
    marginHorizontal:16,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    display:'flex',
    flexDirection:'row'
  },
  textJudul: {
    fontSize: 16,
    color: '#222',
  },
  value: {
    marginTop: 3,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  viewContainer: {
    marginVertical:10,
    borderRadius:10,
    marginHorizontal:5,
    backgroundColor:'#000'
    
  },
  imgLogoPT: {
    width: 80,
    height: 80,
  },

});

export default styles;
