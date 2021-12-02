import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';

export function Home({navigation}: {navigation: ScreenNavigationProp}) {
  return (
    <View>
      <Text>home page</Text>
      <Button
        title="to user page"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
    </View>
  );
}

export default Home;
