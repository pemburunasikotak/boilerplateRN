import NetInfo from '@react-native-community/netinfo';

export const isInternetConnected = async (): Promise<Boolean> => {
  const netInfo = await NetInfo.fetch();
  if (netInfo.isConnected != null) {
    return netInfo.isConnected;
  } else {
    return false;
  }
};
