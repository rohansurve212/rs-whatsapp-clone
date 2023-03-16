/** @format */

import { View, Text, FlatList } from 'react-native'

// Import own components
import ChatListItem from '../components/ChatListItem'

// Import dummy data
import chats from '../../assets/data/chats.json'

const ChatsScreen = () => {
  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  )
}

export default ChatsScreen
