import {NativeBaseProvider} from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import Navigator from './App/navigation';
import {configureStore} from './App/Redux/Store';
import './i18n.config';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
