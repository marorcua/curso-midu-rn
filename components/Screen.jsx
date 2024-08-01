import { View, Text } from 'react-native'
import React from 'react'

export default function Screen({ children }) {
  return <View className='bg-black flex-1 pt-4 px-2' children={children} />
}
