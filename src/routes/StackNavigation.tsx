import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Details from '../screens/Details';
import TabNavigation from './TabNavigation';
import {Product} from '../screens/HomeProducts';

type StackNavigationProps = {
  Home: undefined;
  Details: {item: Product};
};

const Stack = createStackNavigator<StackNavigationProps>();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
