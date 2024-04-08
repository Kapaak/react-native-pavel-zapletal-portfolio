import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import styled from "styled-components/native";
import { Title } from "@/components/Title";

export default function AboutMeTab() {
  return (
    <ScrollView>
      <AboutMeView>
        <Title>About me</Title>
        <ProfieImage source={require("@/assets/images/profile-img.webp")} />
        <View />
        <SText>
          Hi, I'm Pavel Zapletal a self-taught JavaScript programmer. I'm 29 yo,
          living in Brno. Creating websites is my bread and butter. When I'm not
          at home I usually go outside to enjoy some nature.
        </SText>

        <SText>
          I'm mostly interested in front-end frameworks like Next.js and Svelte,
          but I also have some knowledge in Nest.js and Express.
        </SText>
        <SText>
          Besides my passion for front-end development I also like to read about
          mobile applications and in near future I would like to touch
          technologies like React Native and SwiftUI.
        </SText>
      </AboutMeView>
    </ScrollView>
  );
}

const ProfieImage = styled.Image`
  width: 100%;
  height: 320px;
  border-radius: 30px;
`;

const SText = styled.Text`
  font-size: 16px;
  line-height: 28px;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`;

const AboutMeView = styled.View`
  padding: 30px;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey["600"]};
`;
