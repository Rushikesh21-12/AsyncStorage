import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screen/HomeScreen'

export default function App() {

  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name = 'HomeScreen'
          component = {HomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
