import React from "react";

import { ThemeContext } from "styled-components";
import { Wrapper, Header, HeaderContainer, Search } from "./styles";

export default function () {
  const theme = React.useContext(ThemeContext);

  return (
    <Wrapper>
      <Header  colors={theme.header.background}>
        <HeaderContainer>
          <Search />
        </HeaderContainer>
      </Header>
    </Wrapper>
  );
}
