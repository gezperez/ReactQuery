import React from 'react'
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native'

import Colors from '~/utils/Colors'

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size={'large'} />
  </View>
)

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.WHITE,
  },
})

export default Loader
