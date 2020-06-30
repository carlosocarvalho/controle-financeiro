import React from "react";
import {
  Wrapper,
  Main,
  Container,
  Buttom,
  ButtomLabel,
  Label,
  Link,
  LabelRegister,
  LogoContainer,
  LinkContainer,
} from "./styles";

import F from "../../components/Input";
import Logo from "../../components/Icons/Logo";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

const Login: React.FC = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("App");
  };

  return (
    <Wrapper>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Main>
        <LogoContainer>
          <Logo width={100} height={100} />
          <Label> Financeiro pessoal</Label>
        </LogoContainer>
        <Container>
          <F.Input label="Login" />
          <F.Input label="Senha" secureTextEntry />

          <Buttom onPress={handleLogin}>
            <ButtomLabel>Acessar</ButtomLabel>
          </Buttom>

          <LinkContainer>
            <Link>
              <Label>Recuperar Senha</Label>
            </Link>
            <Link>
              <LabelRegister>Criar conta</LabelRegister>
            </Link>
          </LinkContainer>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default Login;
