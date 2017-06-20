import { AsyncStorage } from 'react-native';

export const saveToken = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    AsyncStorage.setItem(key, serializedState);
  } catch (err) {
    console.log('err', err.message);
  }
};

export const removeToken = key => AsyncStorage.removeItem(key);
