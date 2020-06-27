import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";

const { width } = Dimensions.get("screen");

import { CastContext } from "../../Context";

// import ModalDetail from "../Detail";

import {
  Container,
  ButtonBackClose,
  HeaderContainer,
  Header,
  HeaderTitle,
  ButtonSearchSearch,
  Content,
} from "./styles";
import List from "../../List";

import Detail from "../Detail";
import Form from '../Form'

const items = [
  {
    value: 1000.29,
    title: "Aluguel",
    date: "2020-10-10",
    account: "Conta Padrão",
    paid: true,
    type: "saida",
    isUp: false,
  },
  {
    value: 17.29,
    title: "Amazon Prime",
    date: "2020-10-12",
    account: "Carlos J. Carvalho",
    paid: true,
    type: "saida",
    isUp: false,
  },
  {
    value: 17.29,
    title: "Internet",
    date: "2020-10-12",
    account: "Conta Padrão",
    paid: false,
    type: "saida",
    isUp: false,
  },

  {
    value: 4000.0,
    title: "Receita App",
    date: "2020-10-17",
    account: "Conta Padrão",
    paid: true,
    type: "entrada",
    isUp: true,
  },
  {
    value: 1000.29,
    title: "Aluguel",
    date: "2020-10-10",
    account: "Conta Padrão",
    paid: true,
    type: "saida",
    isUp: false,
  },
];

const expandGroup = (data: any) => {
  let items: any = [];

  for (let i in data) {
    let group = data[i];
    items = [
      ...items,
      {
        isHeader: true,
        title: i,
      },
    ];
    items = [...items, ...group];
  }
  return items;
};

const Cast: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCast } = React.useContext(CastContext);
  
  const [data, setData] = React.useState<Array<any>>([]);
  const group = items.reduce((a: any, b: any) => {
    a[b.date] = [...(a[b.date] || []), b];
    return a;
  }, {});

  React.useEffect(() => {
    async function formHide(){
      //handleToggleCastForm()
    }
    formHide();

    setData(expandGroup(group));
  }, []);

  return (
    <CastContext.Consumer>
      {({ show }) => (
        <Modal style={{ margin: 0 }} deviceWidth={width} isVisible={show}>
          <Container>
            <Header>
              <HeaderContainer>
                <ButtonBackClose onPress={handleToggleCast}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={24}
                    color={theme.header.color}
                  />
                </ButtonBackClose>
                <HeaderTitle>Lancamentos</HeaderTitle>
                <ButtonSearchSearch>
                  <Feather name="search" color={theme.header.color} size={24} />
                </ButtonSearchSearch>
              </HeaderContainer>
            </Header>
            <Content>
              <List data={!!data && data} />
            </Content>
          </Container>
        </Modal>
      )}
    </CastContext.Consumer>
  );
};

export default Cast;
