import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './routes/StackNavigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
