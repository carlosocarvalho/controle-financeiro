import React from "react";

import { Entypo } from "@expo/vector-icons";

import {
  Container,
  HeaderContainer,
  Title,
  Button,
  TargetContainer,
  TargetBarContainer,
  TargetBar,
  TargetWrapper,
  Label,
  Value,
  TargetInfoContainer,
} from "./styles";
import { Card, CardHeader, CardBody } from "../../Card";

const items = [
  {
    target: 10000.0,
    value: 100,
    title: "Carro",
  },
  {
    target: 100000.0,
    value: 35000,
    title: "Casa",
  },
];

export default function () {
  return (
    <Container>
      <Card>
        <CardHeader>
          <HeaderContainer>
            <Title>Objetivos</Title>
            <Button>
              <Entypo size={25} color="#fff" name="plus" />
            </Button>
          </HeaderContainer>
        </CardHeader>
        <CardBody>
          {items.map((item) => (
            <TargetWrapper key={String(Math.random())}>
              <TargetContainer>
                <TargetInfoContainer>
                  <Label>{item.title}</Label>
                  <Value>R$ {item.target}</Value>
                </TargetInfoContainer>
                <TargetBarContainer>
                  <TargetBar width={ ((item.value / item.target) * 100) }></TargetBar>
                </TargetBarContainer>
              </TargetContainer>
            </TargetWrapper>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}
