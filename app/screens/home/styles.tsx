import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  viewInner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginTop: 50,
    paddingHorizontal: 24,
    // backgroundColor: 'white',
  },

  imgIconNavigasi: {
    width: 40,
    height: 40,
  },

  cardViewDataTokoHeader: {
    width: 200,
    height: 57,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: 'white',
  },

  imgIconTokoHeader: {
    width: 35,
    height: 35,
  },

  textNamaTokoHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#333',
  },

  imgIconLokasiHeader: {
    width: 15,
    height: 15,
    marginLeft: -5,
    marginTop: -5,
  },

  textAlamatToko: {
    marginTop: -3,
    fontFamily: 'Roboto-Light',
    fontSize: 9,
    color: '#888',
    flex: 1,
    flexWrap: 'wrap',
  },

  imgIconKeranjang: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },

  textGreeting: {
    marginTop: 25,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#333',
  },

  textAplikasiDemo: {
    alignSelf: 'center',
    marginBottom: 7,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    // color: COLORS.THEME_COLOR,
  },

  textBtnDaftarKategori: {
    alignSelf: 'flex-end',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    // color: COLORS.THEME_COLOR,
  },

  cardViewInfoPlafon: {
    height: 118,
    marginTop: 15,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  viewInnerInfoPlafon: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 5,
  },

  imgInfoPlafon: {
    width: 75,
    height: 75,
    marginLeft: 15,
    alignSelf: 'center',
  },

  viewDataInfoPlafon: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginLeft: 10,
    zIndex: 10,
  },

  textLabelInfoPlafon: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },

  textSisaPlafon: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#888',
  },

  textTotalPlafon: {
    marginTop: -3,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#888',
  },

  textBtnLihatDetailPlafon: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    // color: COLORS.THEME_COLOR,
  },

  viewAlignItemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  imgKurvaCardInfoPlafon: {
    width: 128,
    height: 128,
    marginRight: -5,
    alignSelf: 'center',
    zIndex: 5,
  },

  textLabelBarangTerlaris: {
    marginTop: 25,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#333',
    paddingBottom: 5,
  },

  textSubJudul: {
    marginTop: -2,
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: '#888',
    paddingBottom: 3,
  },

  cardViewPilihContent: {
    width: 300,
    height: 75,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },

  viewItemContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  imgLogoContent: {
    width: 40,
    height: 40,
  },

  textLabelContent: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
  },

  viewContainerActivityIndicator: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //modal
  viewContainerModal: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    flex: 1,
  },

  viewContent: {
    backgroundColor: '#999',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },

  textJudul: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#555',
  },

  textPesan: {
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#999',
  },

  btnOk: {
    backgroundColor: '#999',
    borderRadius: 10,
    marginTop: 18,
    padding: 8,
  },

  textBtnOk: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  //
  viewScrool: {
    marginTop: -300,
  },
  textMasukAtas: {
    textAlign: 'center',
    color: COLORS.BIRU_TUA,
    fontWeight: '700',
    fontSize: 18,
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
  viewContentTambah: {
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.PUTIH,
    borderRadius: 15,
    elevation: 7,
  },
  textMasukAtastambah: {
    textAlign: 'center',
    color: COLORS.BIRU_TUA,
    fontWeight: '700',
    fontSize: 18,
  },
  viewMasuktambah: {
    backgroundColor: COLORS.KUNING,
    margin: 16,
    padding: 16,
    borderRadius: 15,
    elevation: 7,
  },
});

export default styles;
