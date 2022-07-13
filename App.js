/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './screens/Form';
import Info from './screens/Info';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen 
            name="Form" 
            component={Form}  
            options={() => ({
              headerTitle: 'Form',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3080FF',
              },
              headerTitleStyle: {
                fontSize: 37,
                color: 'white',
                alignSelf: 'center',        
              }})
            }/>
        <Stack.Screen 
            name="Info"
            component={Info}
            options={() => ({
              headerTitle: 'Welcome !!!',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3080FF',
              },
              headerTitleStyle: {
                fontSize: 37,
                color: 'white',
                alignSelf: 'center',        
              }})
            } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;