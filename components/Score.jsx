import { View, Text } from 'react-native'
import React from 'react'

const Score = ({ score, maxScore }) => {
  const getColor = () => {
    const percentage = score / maxScore
    if (percentage < 0.5) return 'bg-red-500'
    if (percentage > 0.96) return 'bg-green-500'
    return 'bg-orange-500'
  }
  const className = getColor()
  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center `}
    >
      <Text className='text-white text-lg font-bold '>{score}</Text>
    </View>
  )
}

export default Score
