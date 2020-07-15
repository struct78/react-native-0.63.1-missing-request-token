import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export const UploadImage = () => {
  const handleClick = async () => {
    ImagePicker.showImagePicker({
        cameraType: 'front',
    },
    (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker')
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error)
        } else {
            startUpload(response.uri)
        }
    })
  }

  const startUpload = async (url) => {
    const image = await fetch(url)
    const blob = await response.blob()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.buttonText}>
          Upload
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    borderRadius: 1000,
    padding: 32,
    backgroundColor: "#2030aa",
    color: '#ffffff',
    minWidth: 200,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  }
})
