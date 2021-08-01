import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'

import { LoginScreenProps } from '~/navigation/interfaces/auth'

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const handleOnPress = useCallback(() => {
    navigation.navigate('Home')
  }, [navigation])

  return <TouchableOpacity onPress={() => handleOnPress()} />
}

export default LoginScreen
