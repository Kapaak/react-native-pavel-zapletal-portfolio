import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey['800']};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
`
