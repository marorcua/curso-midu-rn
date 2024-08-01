import {
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import Score from './Score'
import { Link } from 'expo-router'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable)

const GameCard = ({ game }) => {
  return (
    <Link href={'/' + game.slug} asChild>
      <StyledPressable className='active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4'>
        <View
          key={game.slug}
          className='flex-row bg-slate-600/10 p-4 rounded-xl gap-1 mb-1'
        >
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className='mb-1'>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>
              {game.description.slice(0, 100)}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

export default GameCard

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 50,
      delay: index * 500,
      useNativeDriver: true,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
})
