import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './routes/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Bootsplash from 'react-native-bootsplash';

function App() {
  return (
    <NavigationContainer onReady={() => Bootsplash.hide({fade: true})}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          animated
          showHideTransition="slide"
        />

        <StackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
