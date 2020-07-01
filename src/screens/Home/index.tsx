import React from "react";
import { ThemeContext } from "styled-components";
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
import BankAccount from "../../components/BankAccount";
import CreditCard from "../../components/CreditCard";
import Target from "../../components/Target";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { UserContext } from "../User/Context";
import ProfileModal from "../User/Modal";

const avatar = require("../../images/avatar.png");

export default function Home() {
  const theme = React.useContext(ThemeContext);
  
  const [visible, setVisible] = React.useState(true);
  const toggleVisible = () => setVisible((prev) => !prev);
  const { handleShowProfile, showProfile } = React.useContext(UserContext)
  return (
      <Wrapper>
        <FocusAwareStatusBar
          barStyle={!showProfile ? "light-content" : 'dark-content' }
          backgroundColor={ !showProfile ? "#2B1E55" : '#ecf0f1'}
        />
        <Header colors={theme.header.background}>
          <HeaderContainer>
            <UserContainer >
              <AvatarContainer onPress={handleShowProfile}>
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
                  ) : (
                    "*******"
                  )}
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
        <Target.Resume />
                  <ProfileModal   />
      </Wrapper>
    
  );
}
