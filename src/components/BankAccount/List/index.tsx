import React from "react";
import { Text } from "react-native";
import { Entypo, MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Card, CardHeader, CardBody } from "../../Card";
import {
  Container,
  Title,
  HeaderContainer,
  Button,
  AccountWrapper,
  AccountLogo,
  AccountContainer,
  AccountTitle,
  AccountType,
  AccountBalance,
  Divider,
} from "./styles";

const items = [
  {
    balance: "5.000,23",
    title: "Conta Local",
    type: "Outros",
  },
  {
    balance: "15.000,23",
    title: "Banco Nubank",
    type: "Conta Corrente",
  },
];

export default function List() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <HeaderContainer>
            <Title>Contas</Title>
            <Button>
              <Entypo size={25} color="#fff" name="plus" />
            </Button>
          </HeaderContainer>
        </CardHeader>
        <CardBody>
          {items.map((item, i) => (
            <React.Fragment key={String(Math.random())}>
              {i > 0 ? <Divider /> : null}
              <AccountWrapper>
                <AccountLogo>
                  <Icon size={22} color="#fff" name="bank" />
                </AccountLogo>
                <AccountContainer>
                  <AccountTitle>{item.title}</AccountTitle>
                  <AccountType>{item.type}</AccountType>
                </AccountContainer>
                <AccountBalance>
                 R$ {item.balance}
                </AccountBalance>
              </AccountWrapper>
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}
