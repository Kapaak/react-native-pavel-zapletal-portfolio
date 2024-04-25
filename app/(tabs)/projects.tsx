import styled from 'styled-components/native'

import { Project } from '@/components/Project'
import { Title } from '@/components/Title'

const projects = [
  {
    title: 'Rick and Morty',
    url: 'https://rick-a-morty.vercel.app/',
    image: require('@/assets/projects/rick-a-morty.png'),
    detail: {
      technology: 'Next.js / Rich and Morty API',
      colors: ['#001427', '#a2f3bc', '#f5bb40'],
      font: 'Rajdhani',
    },
  },
  {
    title: 'Barbora Nováková',
    url: 'https://barboranovakova.cz/',
    image: require('@/assets/projects/bara-novakova.png'),
    detail: {
      technology: 'Next.js / Sanity.io',
      colors: ['#001427', '#8d0801'],
      font: 'Roboto / Righteous',
    },
  },
  {
    title: 'Kuchta Buchta',
    url: 'https://kuchta-buchta.vercel.app/',
    image: require('@/assets/projects/kuchta-buchta.png'),
    detail: {
      technology: 'Next.js / Sanity.io',
      colors: ['#363636', '#b0235f', '#fa7268'],
      font: 'Oswald / Rajdhani',
    },
  },
  {
    title: 'Plavání Lužánky',
    url: 'https://www.plavani-luzanky.cz/',
    image: require('@/assets/projects/kometa.png'),
    detail: {
      technology: 'Next.js / Sanity.io',
      colors: ['#2172dd', '#ffca0f'],
      font: 'Bebas Neue / Poppins',
    },
  },
  {
    title: 'Tábory Riviéra',
    url: 'https://www.primestak-brno.cz/',
    image: require('@/assets/projects/primestak.png'),
    detail: {
      technology: 'Next.js / Sanity.io',
      colors: ['#2172dd', '#73f0c0'],
      font: 'Bebas Neue / Poppins',
    },
  },
  {
    title: 'Routist',
    url: 'https://www.routist.cz/',
    image: require('@/assets/projects/routist.png'),
    detail: {
      technology: 'Next.js / Prisma',
      colors: ['#fbb034'],
      font: 'Bebas Neue / Poppins',
    },
  },
]

export default function ProjectsTab() {
  return (
    <ProjectsView>
      <Title>Projects</Title>
      <ProjectsContainer
        contentContainerStyle={{
          gap: 20,
        }}
      >
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ProjectsContainer>
    </ProjectsView>
  )
}

const ProjectsView = styled.View`
  padding: 30px;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey['300']};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`

const ProjectsContainer = styled.ScrollView``
