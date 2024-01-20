import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import WebviewScreen from '../screens/WebviewScreen';

const Stack = createNativeStackNavigator();

const Stacks: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="WebviewScreen" component={WebviewScreen} />
    </Stack.Navigator>
  );
};

export default Stacks;
