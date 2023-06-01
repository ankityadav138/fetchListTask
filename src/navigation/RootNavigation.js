import React from 'react';
import List from '../screens/List';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Details';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
