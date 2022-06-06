import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Button, HStack, Image, Input, VStack} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import images from '../../assets/images';
import Loader from '../../components/Loader';
import Colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import {isEmailValid, screenHeight} from '../../utils';
import {updateUser} from './action';
import style from './style';

const Login = props => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const {t} = useTranslation();

  const onSubmit = async () => {
    if (email.trim() == '') {
      alert(t('onboarding.emptyEmail'));
    } else if (password.trim() == '') {
      alert(t('onboarding.emptyPassword'));
    } else if (!isEmailValid(email)) {
      alert(t('onboarding.emailValid'));
    } else {
      let data = {
        email: email,
        password: password,
      };
      setLoader(true);
      axios
        .post('http://backend.jokester.co.in/login', data)
        .then(res => {
          navigation.navigate('dashboard');
          setLoader(false);
        })
        .catch(err => {
          alert('Email is not registered!');
          setLoader(false);
        });
    }
  };
  return (
    <>
      {!loader ? (
        // <Stack style={{backgroundColor: Colors.Onboarding, flex: 1}}>
        <KeyboardAwareScrollView
          style={{backgroundColor: Colors.Onboarding, flex: 1}}>
          <Image
            resizeMode={'cover'}
            style={styles.imageStyle}
            source={images.SplashThree}
            alt="Alternate Text"
          />
          <VStack style={{flex: 0.6}}>
            <Image
              source={images.launchIcon}
              style={{top: -50, alignSelf: 'center'}}
              alt="image"
            />
            <Input
              placeholder={t('onboarding.email')}
              mt={1}
              mb={3}
              value={email}
              variant={'unstyled'}
              onChangeText={text => setEmail(text)}
              style={style.inputStyle}
            />
            <Input
              placeholder={t('onboarding.password')}
              mt={1}
              mb={3}
              value={password}
              secureTextEntry={true}
              variant={'unstyled'}
              onChangeText={text => setPassword(text)}
              style={style.inputStyle}
            />
            <Button
              variant={'unstyled'}
              style={[style.button, {marginTop: 30}]}
              onPress={onSubmit}>
              <Text style={style.buttonText}>{t('onboarding.login')}</Text>
            </Button>
          </VStack>
          <HStack style={{marginHorizontal: 30, marginVertical: 20}}>
            <Text style={styles.textStyle}>{t('onboarding.noAccount')}</Text>
            <Text
              style={[
                styles.textStyle,
                {
                  color: Colors.Navigation,
                  paddingLeft: 10,
                },
              ]}
              onPress={() => navigation.navigate('register')}>
              {t('onboarding.signup')}
            </Text>
          </HStack>
        </KeyboardAwareScrollView>
      ) : (
        <Loader />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: screenHeight / 2 - 150,
    // flex: 0.4,
    width: '100%',
    resizeMode: 'cover',
  },
  textStyle: {
    color: Colors.Black,
    fontFamily: fonts.FontFamily,
    fontSize: 16,
  },
});
const mapStateToProps = state => {
  console.log(state);
  return {
    userInfo: state.Onboarding.info,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
