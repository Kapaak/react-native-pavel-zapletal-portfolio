import { useState } from 'react'
import { Image, Text } from 'react-native'

import * as S from './Project.style'

import { ExternalLink } from '../ExternalLink'

interface ProjectProps {
  title: string
  url: string
  image: any
  detail: {
    technology: string
    colors: string[]
    font: string
  }
}

export function Project({ title, url, image, detail }: ProjectProps) {
  const [open, setOpen] = useState(false)

  const detailsLabel = open ? 'hide details' : 'show details'

  return (
    <S.Project>
      <Image source={image} style={{ width: '100%', height: 200 }} />
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDetailActions>
        <S.ProjectLink>
          <ExternalLink href={url} style={{ color: 'white' }}>
            <S.ProjectLinkText>visit website</S.ProjectLinkText>
          </ExternalLink>
        </S.ProjectLink>
        <S.ProjectDetailButton onPress={() => setOpen((prev) => !prev)}>
          <S.ProjectDetailButtonText>{detailsLabel}</S.ProjectDetailButtonText>
        </S.ProjectDetailButton>
      </S.ProjectDetailActions>
      {open && (
        <S.ProjectDetail>
          <S.Divider />
          <S.ProjectDetailItem>
            <S.ProjectDetailItemTitle>Tech</S.ProjectDetailItemTitle>
            <Text>{detail.technology}</Text>
          </S.ProjectDetailItem>
          <S.ProjectDetailItem>
            <S.ProjectDetailItemTitle>Colors</S.ProjectDetailItemTitle>
            <S.ProjectDetailColorContainer>
              {detail.colors.map((color) => (
                <S.ProjectDetailColor color={color} />
              ))}
            </S.ProjectDetailColorContainer>
          </S.ProjectDetailItem>
          <S.ProjectDetailItem>
            <S.ProjectDetailItemTitle>Fonts</S.ProjectDetailItemTitle>
            <Text>{detail.font}</Text>
          </S.ProjectDetailItem>
        </S.ProjectDetail>
      )}
    </S.Project>
  )
}
