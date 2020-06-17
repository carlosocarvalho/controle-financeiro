import React from "react";
import { Dimensions } from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import {
  Container,
  Card,
  CardContainer,
  CardDescription,
  CardHeader,
  CardTitle,
  Bold,
  Button,
  ButtonLabel,
  CardIcon,
} from "./styles";

const { width } = Dimensions.get("screen");
const padding = 32;
export default function Notification() {
  return (
    <Container>
      <Card style={{ width: width - padding }}>
        <CardContainer>
          <CardHeader>
          <CardIcon>
              <Ionicons name="ios-notifications-outline" color="#fff" size={30} />
            </CardIcon>
            <CardTitle>Importaca de notificacao</CardTitle>
          </CardHeader>
          <CardDescription>
            Automimatize seus lancamentos coma importacao de SMS e Notificacoes
          </CardDescription>
        </CardContainer>
        <Button primary>
          <ButtonLabel primary>Saiba Mais</ButtonLabel>
        </Button>
      </Card>

      <Card style={{ width: width - padding }}>
        <CardContainer>
          <CardHeader>
            <CardIcon>
              <MaterialIcons name="money-off" color="#fff" size={30} />
            </CardIcon>
            <CardTitle>Fique no controle</CardTitle>
          </CardHeader>
          <CardDescription>
            Você tem <Bold>3 contas a pagar</Bold> no total de R$ 500,00
          </CardDescription>
        </CardContainer>
        <Button>
          <ButtonLabel>Pagar</ButtonLabel>
        </Button>
      </Card>
    </Container>
  );
}
