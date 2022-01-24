import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function setTokenStorage(value: string) {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    console.error(e);
  }
}
