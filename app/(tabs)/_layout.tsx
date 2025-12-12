// app/(tabs)/_layout.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import FeedScreen from '.'
import ExploreScreen from './explore'
import MessageScreen from './message'
import ProfileScreen from './profile'
import ReelsScreen from './reels'

import Icon from '@/components/shared/IconComponent'
import styles from '@/styles/styles'
import { Image } from 'expo-image'


const Tab = createMaterialTopTabNavigator()
const screenOptions = {
  sceneStyle: styles.backgroundDarkMode,
  animationEnabled: false,
  swipeEnabled: true,
  tabBarShowLabel: false,
  tabBarIndicatorStyle: styles.h0,
  tabBarStyle: styles.tabs
}

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          tabBarPosition="bottom"
          screenOptions={screenOptions}
        >
          <Tab.Screen
            key="feed"
            name="feed"
            component={FeedScreen}
            options={{
              tabBarIcon: ({ focused }) => focused ? <Icon name="home-focus" /> : <Icon name="home"  />
            }}
          />
          <Tab.Screen
            key="reels"
            name="reels"
            component={ReelsScreen}
            options={{
              tabBarIcon: ({ focused }) => focused ? <Icon name="reels-focus" /> : <Icon name="reels"  />
            }}
          />
          <Tab.Screen
            key="message"
            name="message"
            component={MessageScreen}
            options={{
              tabBarIcon: ({ focused }) => focused ? <Icon name="message-focus" /> : <Icon name="message"  />
            }}
          />
          <Tab.Screen
            key="explore"
            name="explore"
            component={ExploreScreen}
            options={{
              tabBarIcon: ({ focused }) => focused ? <Icon name="explore-focus" /> : <Icon name="explore"  />
            }}
          />
          <Tab.Screen
            key="profile"
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => <Image source={require("@/assets/images/app/profile.jpeg")} style={{ width: 24, height: 24, borderRadius: 999 }} />
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
