import React from "react";
import { Platform, View, Text, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { Feather, MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Modal from "react-native-modal";

const deviceWidth = Dimensions.get("window").width;
import {
  Wrapper,
  Header,
  HeaderContainer,
  Search,
  ModalInnner,
  Box,
  ItemContainer,
  Title,
  Label,
  Value,
  Date,
  BoxValue,
  Actions,
  ActionIcon,
  HeaderTitle,
  ContainerTotal,
  Small,
  ModalBackdrop,
} from "./styles";


import ModalBoxCash from "../../../components/ModalboxCash";

const items = [
  {
    value: 1000.29,
    title: "Aluguel",
    date: "2020-10-10",
    account: "Conta Padrão",
    paid: true,
    type: "saida",
  },
  {
    value: 17.29,
    title: "Amazon Prime",
    date: "2020-10-12",
    account: "Carlos J. Carvalho",
    paid: true,
    type: "saida",
  },
  {
    value: 17.29,
    title: "Internet",
    date: "2020-10-12",
    account: "Conta Padrão",
    paid: false,
    type: "saida",
  },

  {
    value: 4000.0,
    title: "Receita App",
    date: "2020-10-17",
    account: "Conta Padrão",
    paid: true,
    type: "entrada",
  },
  {
    value: 1000.29,
    title: "Aluguel",
    date: "2020-10-10",
    account: "Conta Padrão",
    paid: true,
    type: "saida",
  },
  {
    value: 17.29,
    title: "Amazon Prime",
    date: "2020-10-12",
    account: "Carlos J. Carvalho",
    paid: true,
    type: "saida",
  },
  {
    value: 17.29,
    title: "Internet",
    date: "2020-10-12",
    account: "Conta Padrão",
    paid: false,
    type: "saida",
  },

  {
    value: 4000.0,
    title: "Receita App",
    date: "2020-10-17",
    account: "Conta Padrão",
    paid: true,
    type: "entrada",
  },
];

type CashProps = {
  id?: String;
  title?: String;
};

export default function () {
  const theme = React.useContext(ThemeContext);
  const [showModal, setShowModal] = React.useState(false);
  const defaultValues: CashProps = {};
  const [cash, setCash] = React.useState(defaultValues);
  const group = items.reduce((a, b) => {
    a[b.date] = [...(a[b.date] || []), b];
    return a;
  }, {});
  const handleItem = (item) => {
    setCash(item);
    setShowModal((st) => !st);
  };
  return (
    <>
      <Header ios={Platform.OS === "ios"} colors={theme.header.background}>
        <HeaderContainer>
          <HeaderTitle>Lancamentos</HeaderTitle>
          <Actions>
            <ActionIcon>
              <Feather name="search" color="#fff" size={25} />
            </ActionIcon>
            <ActionIcon>
              <Icon name="filter-outline" color="#fff" size={25} />
            </ActionIcon>
          </Actions>
        </HeaderContainer>
      </Header>
      <Wrapper>{<MakeItems onPress={handleItem} data={group} />}</Wrapper>
      <ContainerTotal>
        <Value>
          <Small>Total</Small> R$ 100290,99
        </Value>
      </ContainerTotal>

      <Modal
        style={{ margin: 0 }}
        deviceWidth={deviceWidth}
        isVisible={showModal}
        onBackdropPress={() => setShowModal((s) => !s)}
      >
        <ModalInnner>
          <ModalBackdrop
            onPress={() => setShowModal((s) => !s)}

            onPressOut={({ touchHistory }) => {
              const { touchBank } = touchHistory;
              const obj =  (touchBank.filter( i => i != undefined))[0]
             
              if (obj.startPageY < obj.currentPageY) setShowModal((s) => !s);
            }}
          ></ModalBackdrop>
          <ModalBoxCash data={cash} />
        </ModalInnner>
      </Modal>
    </>
  );
}

type MakeProps = {
  data: Object;
  onPress: Function;
};
function MakeItems<MakeProps>({ data, onPress }) {
  let items = [];

  for (let i in data) {
    let group = data[i];
    let j = 0;
    items = [...items, <Date key={i}>{i}</Date>];
    items = [
      ...items,
      ...group.map((item) => {
        const odd = j % 2 == 0;
        j += 1;
        return (
          <ItemContainer
            onPress={() => onPress(item)}
            odd={!odd}
            key={String(Math.random())}
          >
            <Feather
              size={20}
              name={item.type === "entrada" ? "arrow-up" : "arrow-down"}
              color={item.type === "entrada" ? "green" : "red"}
            />
            <Box>
              <Title>{item.title}</Title>
              <Label>{item.account}</Label>
            </Box>
            <BoxValue>
              <Value>R$ {item.value}</Value>
              <Label>{item.paid ? "pago" : "não pago"}</Label>
            </BoxValue>
          </ItemContainer>
        );
      }),
    ];
  }
  return items;
}
