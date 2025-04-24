import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Home from '../screens/HomeProducts';
import {Heart, House} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <House color={color} size={size} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => <Heart color={color} size={size} />,
          tabBarLabel: 'Favoritos',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
