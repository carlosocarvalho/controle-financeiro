import React from "react";
import { ThemeContext } from "styled-components";
import { Feather } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  Container,
  ButtonAdd,
} from "./styles";

import Target from "../../components/Target";
import { DepositContext } from "../../components/Target/Context/DepositContext";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

const TargetScreen: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const { handleShowForm } = React.useContext(DepositContext);
  return (
    <Wrapper>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Header colors={theme.header.background}>
        <HeaderContainer>
          <Title>Objetivos</Title>
          <ButtonAdd onPress={handleShowForm}>
            <Feather name="plus" size={24} color={theme.header.color} />
          </ButtonAdd>
        </HeaderContainer>
      </Header>
      <Container>
        <Target.List />
      </Container>
    </Wrapper>
  );
};

export default TargetScreen;
