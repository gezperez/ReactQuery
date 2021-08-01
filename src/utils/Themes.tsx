import { DefaultTheme } from '@react-navigation/native'

import Colors from './Colors'

export const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    font: Colors.BLACK,
    background: Colors.WHITE,
    backButton: Colors.GRAY,
    barStyle: 'dark-content',
  },
}

export const DarkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    font: Colors.WHITE,
    background: Colors.BLACK,
    backButton: Colors.WHITE,
    barStyle: 'light-content',
  },
}
