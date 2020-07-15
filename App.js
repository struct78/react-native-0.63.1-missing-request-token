import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native'
import { UploadImage } from './components/uploadImage'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View styles={styles.container}>
          <UploadImage />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})


export default App
