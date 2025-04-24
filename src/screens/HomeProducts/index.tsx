import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {NavigationProps} from '../../routes/types';

function Home() {
  const navigation = useNavigation<NavigationProps>();

  const navigationToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable onPress={() => navigationToDetails()}>
        <Text>Clique aqui</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Home;
