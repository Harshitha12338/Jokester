import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Button, HStack, Image, Input, VStack} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import images from '../../assets/images';
import Loader from '../../components/Loader';
import Colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';
import {screenHeight, isEmailValid} from '../../utils';
import {updateUser} from './action';
import style from './style';

const Register = props => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const {t} = useTranslation();

  const onSubmit = async () => {
    if (email.trim() == '') {
      alert(t('onboarding.emptyEmail'));
    } else if (name.trim() == '') {
      alert(t('onboarding.emptyName'));
    } else if (password.trim() == '') {
      alert(t('onboarding.emptyPassword'));
    } else if (confirmPassword.trim() == '') {
      alert(t('onboarding.emptyConPassword'));
    } else if (!isEmailValid(email)) {
      alert(t('onboarding.emailValid'));
    } else if (password.trim() != confirmPassword.trim()) {
      alert(t('onboarding.passwordMatch'));
    } else {
      let data = {
        fullName: name,
        email: email,
        password: password,
        conPassword: confirmPassword,
      };
      setLoader(true);

      axios
        .post('http://backend.jokester.co.in/registeration', data)
        .then(() => {
          alert('Successfully signed up');
          setLoader(false);
          navigation.navigate('dashboard');
        })
        .catch(err => {
          alert('Email already exists');
          console.log(err);
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
            source={images.launchIcon}
            style={{alignSelf: 'center', margin: 50}}
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
            placeholder={t('onboarding.name')}
            mt={1}
            mb={3}
            value={name}
            variant={'unstyled'}
            onChangeText={text => setName(text)}
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
          <Input
            placeholder={t('onboarding.confirmPassword')}
            mt={1}
            mb={3}
            value={confirmPassword}
            secureTextEntry={true}
            variant={'unstyled'}
            onChangeText={text => setConfirmPassword(text)}
            style={style.inputStyle}
          />
          <Button
            variant={'unstyled'}
            style={[style.button, {marginTop: 30}]}
            onPress={onSubmit}>
            <Text style={style.buttonText}>{t('onboarding.signup')}</Text>
          </Button>
          <HStack style={{marginHorizontal: 30, marginVertical: 20}}>
            <Text style={styles.textStyle}>{t('onboarding.haveAccount')}</Text>
            <Text
              style={[
                styles.textStyle,
                {
                  color: Colors.Navigation,
                  paddingLeft: 10,
                },
              ]}
              onPress={() => navigation.navigate('login')}>
              {t('onboarding.login')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
