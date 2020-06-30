import React from "react";
import { ThemeContext } from "styled-components";

import { Wrapper, Header, HeaderContainer, Title, Container } from "./styles";

import MonthChart from "../../components/Chart/Month";
import PeriodicChart from "../../components/Chart/Periodic";

import Cast from "../../components/Cast";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

// import { CashContext } from "../../components/CastModal/Context";

export default function () {
  const theme = React.useContext(ThemeContext);
  // const c = React.useContext(CastContext);
 
  return (
    <Wrapper>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Header colors={theme.header.background}>
        <HeaderContainer>
          <Title>Resumo Financeiro</Title>
        </HeaderContainer>
      </Header>
      <Container>
        <PeriodicChart />
        <MonthChart />
        <Cast.Modal />
      </Container>
    </Wrapper>
  );
}
