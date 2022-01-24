import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getTokenStorage() {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {
    console.error(e);
  }
}
