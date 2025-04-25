import React, {useEffect} from 'react';
import {BackHandler, Text, View} from 'react-native';

function Offline() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>
        Você está offline, verifique sua internet e tente novamente mais tarde
      </Text>
    </View>
  );
}

export default Offline;
