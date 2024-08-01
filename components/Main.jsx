import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedGameCard } from './GameCard'
import Logo from './Logo'
import { Link } from 'expo-router'
import { CircleInfoIcon } from './Icons'
import Screen from './Screen'

// import icon from './assets/icon.png'

const Main = () => {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames()
      .then((games) => {
        setGames(games)
      })
      .catch((error) => alert(error))
  }, [])

  return (
    <Screen>
      {/* <View className='flex-row justify-between items-center mb-4 mx-2'>
        <View>
          <Logo />
        </View>
        <Link href={'/about'} className='text-blue-400'>
          <CircleInfoIcon />
        </Link>
      </View> */}
      {games.length === 0 ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  )
}

export default Main
