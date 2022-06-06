import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {Center, Stack} from 'native-base';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text} from 'react-native';

import images from '../../assets/images';
import Colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';

const Splash = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      ValidateSession();
    }, 3000);
  });

  const ValidateSession = async () => {
    const appUrl = await AsyncStorage.getItem('appUrl');
    let url = 'https://backend.jokester.in/';

    _.isNil(appUrl) && AsyncStorage.setItem('appUrl', url);
    const userData = await AsyncStorage.getItem('@user');
    navigateToNext(JSON.parse(userData));
  };

  function navigateToNext(user) {
    if (user) {
      navigation.navigate('dashboard');
    } else {
      navigation.navigate('login');
    }
  }

  return (
    <Stack style={styles.slide}>
      <Center>
        <Image source={images.launchIcon} alt="image" />
        <Text style={styles.textStyle}>{t('onboarding.appName')}</Text>
      </Center>
    </Stack>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    display: 'flex',
  },
  textStyle: {
    fontFamily: fonts.FontFamilyBold,
    fontSize: fonts.HeaderFontSize,
    color: Colors.Black,
  },
});
export default Splash;
