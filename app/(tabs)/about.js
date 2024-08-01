import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { HomeIcon } from '../../components/Icons'

import { styled } from 'nativewind'
import Screen from '../../components/Screen'

const StylePressable = styled(Pressable)

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className='text-white font-bold mb-8 text-2xl '>About</Text>
        <Link asChild href={'/'}>
          <StylePressable className='active:opacity-20 '>
            {({ pressed }) => (
              <HomeIcon
              //   style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </StylePressable>
        </Link>
        <Text className='text-white text-white/90 mb-4'>
          Tempor tempor sit exercitation officia ut amet eiusmod occaecat
          cupidatat. Consectetur eu quis nostrud incididunt deserunt eiusmod
          elit nisi officia commodo anim. Incididunt in incididunt excepteur
          laborum ipsum ut eiusmod aliqua Lorem pariatur mollit quis. Deserunt
          excepteur dolor ut nostrud in nulla culpa laboris mollit consectetur
          tempor proident esse. Ullamco cillum commodo pariatur nisi adipisicing
          proident.
        </Text>

        <Text className='text-white text-white/90 mb-4'>
          Tempor tempor sit exercitation officia ut amet eiusmod occaecat
          cupidatat. Consectetur eu quis nostrud incididunt deserunt eiusmod
          elit nisi officia commodo anim. Incididunt in incididunt excepteur
          laborum ipsum ut eiusmod aliqua Lorem pariatur mollit quis. Deserunt
          excepteur dolor ut nostrud in nulla culpa laboris mollit consectetur
          tempor proident esse. Ullamco cillum commodo pariatur nisi adipisicing
          proident.
        </Text>

        <Text className='text-white text-white/90 mb-4'>
          Tempor tempor sit exercitation officia ut amet eiusmod occaecat
          cupidatat. Consectetur eu quis nostrud incididunt deserunt eiusmod
          elit nisi officia commodo anim. Incididunt in incididunt excepteur
          laborum ipsum ut eiusmod aliqua Lorem pariatur mollit quis. Deserunt
          excepteur dolor ut nostrud in nulla culpa laboris mollit consectetur
          tempor proident esse. Ullamco cillum commodo pariatur nisi adipisicing
          proident.
        </Text>

        <Text className='text-white text-white/90 mb-4'>
          Tempor tempor sit exercitation officia ut amet eiusmod occaecat
          cupidatat. Consectetur eu quis nostrud incididunt deserunt eiusmod
          elit nisi officia commodo anim. Incididunt in incididunt excepteur
          laborum ipsum ut eiusmod aliqua Lorem pariatur mollit quis. Deserunt
          excepteur dolor ut nostrud in nulla culpa laboris mollit consectetur
          tempor proident esse. Ullamco cillum commodo pariatur nisi adipisicing
          proident.
        </Text>
      </ScrollView>
    </Screen>
  )
}
