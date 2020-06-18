import React from "react";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
  Content,
  Header,
  Icon,
  HeaderContent,
  Title,
  Box,
  BoxContent,
  BoxTitle,
  BoxLabel,
  Value,
  Body,
} from "./styles";
import SvgCashItem from "../Icons/Cash";

type Props = {
  data?: Object;
};
export default function BoxCash<Props>({ data }) {
  return (
    <Content>
      <Header>
        <Icon>
          <FontAwesome5 name="trash" color="#999" size={15} />
        </Icon>
        <HeaderContent>
          <SvgCashItem width={60} height={60} style={{ marginBottom: 16 }} />
          <Title>Conta</Title>
          <Value>R$ 56,00</Value>
        </HeaderContent>

        <Icon>
          <FontAwesome name="pencil" color="#999" size={15} />
        </Icon>
      </Header>
      <Body>
        <Box>
          <BoxContent>
            <BoxLabel>Data</BoxLabel>
            <BoxTitle>20/08/2020</BoxTitle>
          </BoxContent>
          <BoxContent>
            <BoxLabel>Conta</BoxLabel>
            <BoxTitle>Conta Padrão</BoxTitle>
          </BoxContent>
          <BoxContent>
            <BoxLabel>Categoria</BoxLabel>
            <BoxTitle>Servicos</BoxTitle>
          </BoxContent>
        </Box>
      </Body>
    </Content>
  );
}
