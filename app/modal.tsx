import { Platform, StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'

import EditScreenInfo from '@/components/EditScreenInfo'

const SubmitButton = styled.TouchableOpacity`
  color: #ff0000;
  background: #0000ff;
`

const Layout = styled.View`
  background-color: #ababab;
`

export default function ModalScreen() {
  const theme = useTheme()

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />

      <EditScreenInfo path="app/modal.tsx" />
      <SubmitButton>
        <Text style={{ color: 'red' }}>Submit</Text>
      </SubmitButton>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
