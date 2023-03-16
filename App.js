/** @format */

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Import our components
import Navigator from './src/navigation'
import ChatsScreen from './src/screens/ChatsScreen'
import ChatScreen from './src/screens/ChatScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
})
