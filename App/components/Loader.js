import React from 'react';
import {StyleSheet, View} from 'react-native';
const LottieView = require('lottie-react-native');

const Loader = () => {
  return (
    <View style={styles.lottie}>
      <LottieView
        style={{
          width: 100,
          height: 100,
        }}
        source={require('../assets/jsons/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  lottie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default Loader;
