import React from 'react';
import 'react-native-devsettings';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';

import RootStack from './navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
