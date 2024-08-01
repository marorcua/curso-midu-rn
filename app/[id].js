import { ScrollView, Text, ActivityIndicator, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import Screen from '../components/Screen'
import { getGameDetails } from '../lib/metacritic'
import Score from '../components/Score'

export default function Detail() {
  const { id } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)
  useEffect(() => {
    if (id) {
      getGameDetails(id).then((result) => setGameInfo(result))
    }
  }, [id])
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: 'Detalles',
        }}
      />
      {gameInfo === null ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <ScrollView>
          <View className='justify-center text-center items-center'>
            <Image
              source={{ uri: gameInfo.img }}
              className='mb-4 rounded'
              style={{ width: 240, height: 214 }}
            />
            <Score score={gameInfo.score} maxScore={100} />
            <Text className='text-white font-bold text-2xl mb-8'>
              {gameInfo.title}
            </Text>
            <Text className='text-white/70 mt-4 text-left mb-8 text-base'>
              {gameInfo.description}
            </Text>
          </View>
          {/* <Link href={'/'} className='text-blue-400'>
            Volver atras
          </Link> */}
        </ScrollView>
      )}
    </Screen>
  )
}
