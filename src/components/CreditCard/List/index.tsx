import React from "react";
import { Text } from "react-native";
import { Entypo, MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Card, CardHeader, CardBody } from "../../Card";
import {
  Container,
  Title,
  HeaderContainer,
  Button,
  CreditCardWrapper,
  CreditCardLogo,
  CreditCardContainer,
  CreditCardTitle,
  CreditCardType,
  BalanceContainer,
  BalanceLimitContainer,
  Label,
  Value,
  Divider,
} from "./styles";

const items = [
  {
    title: "Iolanda P. Carvalho",
    owner: "Visa",
    limit: "5.000,00",
    used: "0",
  },
  {
    limit: "5.000,23",
    used: "1.000",
    title: "Carlos Carvalho",
    owner: "Master",
  },
];

export default function List() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <HeaderContainer>
            <Title>Cartões de Crédito</Title>
            <Button>
              <Entypo size={25} color="#fff" name="plus" />
            </Button>
          </HeaderContainer>
        </CardHeader>
        <CardBody>
          {items.map((item, i) => (
            <React.Fragment key={String(Math.random())}>
              {i > 0 ? <Divider /> : null}
              <CreditCardWrapper>
                <CreditCardLogo>
                  <Icon size={22} color="#fff" name="credit-card-outline" />
                </CreditCardLogo>
                <CreditCardContainer>
                  <CreditCardType>{item.owner}</CreditCardType>
                  <CreditCardTitle>{item.title}</CreditCardTitle>
                  <BalanceContainer>
                    <BalanceLimitContainer>
                      <Label>Limite</Label>
                      <Value>{item.limit}</Value>
                    </BalanceLimitContainer>
                    <BalanceLimitContainer>
                    <Label>Fatura a vencer</Label>
                      <Value>{item.used}</Value>
                    </BalanceLimitContainer>
                  </BalanceContainer>
                </CreditCardContainer>
              </CreditCardWrapper>
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}
