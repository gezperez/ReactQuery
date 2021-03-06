import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LightTheme } from '~/utils/Themes'
import AuthStack from './stacks/AuthStack'
import GenericStack from './stacks/GenericStack'
import HomeStack from './stacks/HomeStack'
import { navigationRef } from './RootNavigator'

const Stack = createStackNavigator()

const linking = {
  prefixes: ['reactquery://'],
  config: {
    screens: {
      AuthStack: {
        screens: {
          Login: 'login/:username',
          Recover: 'recover/:username',
        },
      },
      HomeStack: {
        screens: {
          Home: 'home/:username',
        },
      },
      GenericStack: {
        screens: {
          Maintenance: 'generic/:username',
        },
      },
    },
  },
}

const Navigator = () => (
  <NavigationContainer ref={navigationRef} linking={linking} theme={LightTheme}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="GenericStack" component={GenericStack} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigator
