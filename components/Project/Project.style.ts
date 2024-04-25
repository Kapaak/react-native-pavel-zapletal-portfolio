import styled from 'styled-components/native'

export const Project = styled.View`
  background-color: ${({ theme }) => theme.colors.grey['200']};
  padding: 10px 12px 20px;
  border-radius: 10px;
`

export const ProjectTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 30px 0px 10px;
`

export const ProjectLink = styled.TouchableHighlight`
  background-color: ${({ theme }) => theme.colors.grey['800']};
  color: ${({ theme }) => theme.colors.grey['100']};
  padding: 8px 14px;
  border-radius: 10px;
`
export const ProjectLinkText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`

export const ProjectDetailButton = styled.TouchableOpacity`
  color: ${({ theme }) => theme.colors.grey['800']};
  padding: 8px 14px;
`

export const ProjectDetailButtonText = styled.Text`
  font-size: 16px;
`

export const ProjectDetailActions = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ProjectDetail = styled.View`
  margin-top: 10px;
  gap: 10px;
  padding: 10px 0;
`

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey['500']};
  margin-bottom: 10px;
`

export const ProjectDetailColorContainer = styled.View`
  gap: 10px;
  flex-direction: row;
`

export const ProjectDetailItem = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const ProjectDetailItemTitle = styled.Text`
  min-width: 44px;
  font-weight: 700;
`

export const ProjectDetailColor = styled.View.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop),
})<{ color: string }>`
  width: 35px;
  height: 21px;
  border-radius: 4px;
  box-shadow: rgba(8, 1, 1, 0.125) 0px 0px 20px;
  background-color: ${({ color }) => color};
`
