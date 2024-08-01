import { View } from 'react-native'
import { Link, Slot, Stack } from 'expo-router'
import React from 'react'
import Logo from '../components/Logo'
import { CircleInfoIcon } from '../components/Icons'

const Layout = () => {
  return (
    <View className='flex-1'>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'yellow',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href={'/about'} className='text-blue-400'>
              <CircleInfoIcon />
            </Link>
          ),
        }}
      />
    </View>
  )
}

export default Layout
