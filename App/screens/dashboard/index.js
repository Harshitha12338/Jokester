import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import fonts from '../../theme/Fonts';
import style from '../onboarding/style';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: fonts.FontFamilyBold,
            fontSize: 18,
            color: '#000',
          }}>
          Dashboard
        </Text>
        <Button
          variant={'unstyled'}
          style={[style.button, {marginTop: 30}]}
          onPress={() => navigation.navigate('login')}>
          <Text style={style.buttonText}>Logout</Text>
        </Button>
      </View>
    </>
  );
};

export default Dashboard;
