/** @format */

import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'

// Import own components
import Message from '../components/Message'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
  return (
    <ImageBackground style={styles.bg} source={bg}>
      <FlatList
        style={styles.list}
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </ImageBackground>
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
