import React, { FC } from 'react'
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Loader } from '~/components'

type ContainerProps = {
  loading?: boolean
}

const Container: FC<ContainerProps> = ({ loading, children }) => {
  const insets = useSafeAreaInsets()

  const barStyle = 'dark-content'

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle={barStyle} />
      <KeyboardAwareScrollView enableOnAndroid contentContainerStyle={styles.scrollView}>
        {children}
      </KeyboardAwareScrollView>
      {loading && <Loader />}
    </View>
  )
}

type Styles = {
  container: ViewStyle
  scrollView: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
  },
})

export default Container
