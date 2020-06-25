import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";

const { width, height } = Dimensions.get("screen");

import { CategorieContext } from "../Context";

import {
  CategorieContainer,
  ButtonBackClose,
  CategorieHeaderContainer,
  CategorieHeader,
  CategorieHeaderTitle,
  ButtonSearchSearch,
  CategorieContent,
} from "./styles";


import Item from "../Item";
import  Icon from '../../Icons'
type ListProps = {};

const items = [
  {
    title: "Educacao",
    icon: Icon.Education
  },
  {
    title: "Transporte",
    icon: Icon.Transport
  },
  {
    title: "Saude",
    icon: Icon.Heart
  },
  {
    title: "Viagens",
    icon: Icon.Travel
  },
  {
    title: "Supermercado",
    icon: Icon.Shop
  },
  {
    title: "Outros",
    icon: Icon.More
  },
];

const Categorie: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const { toggleShow } = React.useContext(CategorieContext);

  return (
    <CategorieContext.Consumer>
      {({ show }) => (
        <Modal style={{ margin: 0 }} deviceWidth={width} isVisible={show}>
          <CategorieContainer>
            <CategorieHeader>
              <CategorieHeaderContainer>
                <ButtonBackClose onPress={toggleShow}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={24}
                    color={theme.header.color}
                  />
                </ButtonBackClose>

                <CategorieHeaderTitle>Categorias</CategorieHeaderTitle>
                <ButtonSearchSearch>
                  <Feather name="search" color={theme.header.color} size={24} />
                </ButtonSearchSearch>
              </CategorieHeaderContainer>
            </CategorieHeader>
            <CategorieContent>
               {
                  items.map( row => (
                    <Item  
                    key={String(Math.random())}
                    Icon={row.icon}
                    title={row.title}/>
                  ) )
               }
            </CategorieContent>
          </CategorieContainer>
        </Modal>
      )}
    </CategorieContext.Consumer>
  );
};

export default Categorie;
