/** @format */
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn(newMessage)
    setNewMessage('')
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* { + Icon} */}

      <AntDesign name='plus' size={28} color='royalblue' />

      {/* {Text Input} */}
      <TextInput
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder='type your message...'
      />

      {/* { Send Icon} */}
      <MaterialIcons
        style={styles.send}
        onPress={onSend}
        name='send'
        size={16}
        color='white'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 16,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
})

export default InputBox
