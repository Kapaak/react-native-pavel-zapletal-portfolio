import styled from 'styled-components/native'

import { Title } from '@/components/Title'

export default function HomeTab() {
  return (
    <HomeView>
      <Subtitle>web developer, UX/UI designer</Subtitle>
      <Title>Pavel Zapletal</Title>
    </HomeView>
  )
}

const HomeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey['300']};
`

const Subtitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors?.grey['800']};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`
