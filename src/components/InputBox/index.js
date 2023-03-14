/** @format */
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn(newMessage)
    setNewMessage('')
  }

  return (
    <View style={styles.container}>
      {/* { + Icon} */}
      <AntDesign name='plus' size={24} color='royalblue' />

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
    </View>
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
