import React from "react";
import { ThemeContext } from 'styled-components';
import { Entypo } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  UserContainer,
  Avatar,
  HeaderContainer,
  BalanceWrapper,
  Bold,
  AvatarContainer,
  EyeIcon,
} from "./styles";
import Notification from "../../components/Notification";
import BankAccount  from "../../components/BankAccount"
import CreditCard from "../../components/CreditCard";
import Target from "../../components/Target";


const avatar = require("../../images/avatar.png");

export default function Home() {
  const theme = React.useContext(ThemeContext)
  const [visible, setVisible] = React.useState(true);
  const toggleVisible = () => setVisible((prev) => !prev);
  return (
    <Wrapper>
      <Header  colors={theme.header.background}>
        <HeaderContainer>
          <UserContainer>
            <AvatarContainer>
              <Avatar source={avatar} resizeMode="contain" />
            </AvatarContainer>
          </UserContainer>
          <BalanceWrapper>
            <BalanceContainer>
              <Balance>
                {visible ? (
                  <>
                    R$ <Bold>1000,00</Bold>
                  </>
                ) : 
                  "*******"
                }
              </Balance>
              <BalanceTitle>Balanco / Saldo</BalanceTitle>
            </BalanceContainer>
            <EyeIcon onPress={toggleVisible}>
              <Entypo
                name={visible ? "eye" : "eye-with-line"}
                size={30}
                color="#fff"
              />
            </EyeIcon>
          </BalanceWrapper>
        </HeaderContainer>
      </Header>
      <Notification />
      <BankAccount.List />
      <CreditCard.List />
      <Target.List />

      
    </Wrapper>
  );
}
