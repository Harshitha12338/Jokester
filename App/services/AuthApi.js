import AsyncStorage from '@react-native-async-storage/async-storage';
import {Paths} from './ApiPaths';
import FetchApi from './FetchApi';

const reqHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const getEnvUrl = async () => {
  const url = await AsyncStorage.getItem('appUrl').then(value => {
    return value;
  });
  return url;
};

export default class AuthApiHelper {
  static login(data) {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: reqHeader,
        method: 'POST',
        body: JSON.stringify(data),
      };
      return FetchApi(`${baseUrl}${Paths.login}`, requestObj);
    });
    return responseval;
  }

  static register(data) {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: reqHeader,
        method: 'POST',
        body: JSON.stringify(data),
      };
      return FetchApi(`${baseUrl}${Paths.register}`, requestObj);
    });
    return responseval;
  }

  static logOut = async navigation => {
    try {
      await AsyncStorage.removeItem('@user');
    } catch (e) {}
    navigation.navigate('Login');
  };
}
