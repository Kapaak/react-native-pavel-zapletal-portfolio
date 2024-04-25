import React from 'react'
import { Pressable } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { FolderKanban, Home, Smartphone, User } from 'lucide-react-native'

import { useClientOnlyValue } from '@/components/useClientOnlyValue'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Pavel Zapletal | UX UI designer',
          tabBarLabel: 'About me',
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Pavel Zapletal | UX UI designer',
          tabBarLabel: 'Projects',
          tabBarIcon: ({ color }) => <FolderKanban color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Pavel Zapletal | UX UI designer',
          tabBarLabel: 'Contact me',
          tabBarIcon: ({ color }) => <Smartphone color={color} />,
        }}
      />
    </Tabs>
  )
}
