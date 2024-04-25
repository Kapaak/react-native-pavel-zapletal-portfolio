import { Linking } from 'react-native'

import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'
import { shareAsync } from 'expo-sharing'
import styled from 'styled-components/native'

import { Title } from '@/components/Title'

export default function ContactMeTab() {
  const downloadCV = async () => {
    const fileName = 'CV.pdf'

    try {
      const asset = Asset.fromModule(require('../../assets/documents/CV.pdf')) // Get the asset
      await asset.downloadAsync() // Ensure the asset is downloaded

      console.log('🚀 ~ downloadCV ~ asset:', asset)
      const result = await FileSystem.downloadAsync(
        asset.uri, // Use the local URI
        FileSystem.documentDirectory + fileName
      )

      console.log(result, 'REs')

      await save(result.uri)
    } catch (err) {
      console.log(err, 'ERR')
    }
  }

  const save = async (uri: string) => {
    await shareAsync(uri)
  }

  return (
    <ContactView>
      <ContactTitle>Projects</ContactTitle>
      <ContactText>
        I am always available for new challenges. If you want to create
        something awesome or just ask, don't hesitate to contact me.
      </ContactText>
      <UnderlineText
        role="link"
        onPress={() => Linking.openURL('mailto:pavel.zaplet25@gmail.com')}
      >
        pavel.zaplet25@gmail.com
      </UnderlineText>
      <UnderlineText onPress={downloadCV}>download CV</UnderlineText>
    </ContactView>
  )
}

const ContactTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.grey['100']};
`

const UnderlineText = styled.Text`
  font-size: 20px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.grey['100']};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`

const ContactText = styled.Text`
  color: ${({ theme }) => theme.colors.grey['100']};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18px;
`

const ContactView = styled.View`
  padding: 30px;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey['800']};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`
