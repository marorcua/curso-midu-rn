import { Tabs } from 'expo-router'
import { View } from 'react-native'

import { InfoIcon, HomeIcon } from '../../components/Icons'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        headerTransparent: true,
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: 'yellow',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  )
}
