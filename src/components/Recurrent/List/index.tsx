import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";

const { width, height } = Dimensions.get("screen");

import { RecurrentContext as Context } from "../Context";

import {
  Container,
  ButtonBackClose,
  HeaderContainer,
  Header,
  HeaderTitle,
  ButtonSearchSearch,
  Content,
} from "./styles";

import Item from "../Item";
import Icon from "../../Icons";
type ListProps = {};

const items = [
  {
    title: "Não repete",
    icon: Icon.More,
  },
  {
    title: "Diária",
    icon: Icon.Calendar,
  },
  {
    title: "Quizenal",
    icon: Icon.Calendar,
  },
  {
    title: "Mensal",
    icon: Icon.Calendar,
  },
  {
    title: "Bimestral",
    icon: Icon.Calendar,
  },
  {
    title: "Trimestral",
    icon: Icon.Calendar,
  },
  {
    title: "Semestral",
    icon: Icon.Calendar,
  },
  {
    title: "Anual",
    icon: Icon.Calendar,
  },
];

const Recurrent: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleRecurrent } = React.useContext(Context);

  return (
    <Context.Consumer>
      {({ show }) => (
        <Modal style={{ margin: 0 }} deviceWidth={width} isVisible={show}>
          <Header>
            <HeaderContainer>
              <ButtonBackClose onPress={handleToggleRecurrent}>
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color={theme.header.color}
                />
              </ButtonBackClose>
              <HeaderTitle>Repetir Conta ?</HeaderTitle>
            </HeaderContainer>
          </Header>
          <Container>
            <Content>
              {items.map((row) => (
                <Item
                  key={String(Math.random())}
                  Icon={row.icon}
                  title={row.title}
                />
              ))}
            </Content>
          </Container>
        </Modal>
      )}
    </Context.Consumer>
  );
};

export default Recurrent;
