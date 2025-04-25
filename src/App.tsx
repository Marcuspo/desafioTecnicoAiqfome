import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './routes/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
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
