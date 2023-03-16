/** @format */
import { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

// Import own components
import Message from '../components/Message'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox'

const ChatScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  return (
    <KeyboardAvoidingView
      style={styles.bg}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 65 : 90}
    >
      <ImageBackground style={styles.bg} source={bg}>
        <FlatList
          style={styles.list}
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
})

export default ChatScreen
