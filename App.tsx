import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store';

import Focus from '@pages/Focus';
import Login from '@pages/Login';
import HomeTab from '@pages/HomeTab';
import Modal from '@pages/Modal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="HomeTab"
              component={HomeTab}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Focus" component={Focus} />
            <Stack.Screen
              name="Modal"
              component={Modal}
              options={{
                presentation: 'transparentModal',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
