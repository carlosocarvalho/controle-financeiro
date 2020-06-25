import React from "react";
import { Dimensions, Platform, View } from "react-native";
import Modal from "react-native-modal";

import { BankAccountContext as Context } from "../Context";
import {
  Container,
  Backdrop,
  Content,
  ButtonCloseKeyBoard,
  Title,
  Item,
  ItemTitle,
  Header,
  ItemIcon,
  ItemDescription,
  ItemLabel,
  ItemBalance,
  ItemBalanceTitle,
  ItemBalanceValue
} from "./styles";

import Icons from "../../Icons";

import { hasOnPressDown } from "../../../helpers/EventHelper";

const { width } = Dimensions.get("screen");

const items = [
  {
    title: "Conta Principal",
    type: "banco",
    balance: 40000
  },

  {
    title: "Conta Carlos",
    type: "banco",
    balance: 10000
  },
  {
    title: "Conta J Carvalho",
    type: "cartao",
    balance: 10000
  },
];

type ItemProps = {
  title: string;
  type: string;
  balance: string
};

const BankAccount: React.FC = () => {
  const { handlerToggleModalBankAccount, handleSetSelected } = React.useContext(
    Context
  );
  
  return (
    <Context.Consumer>
      {({ show }) => (
        <Modal
          style={{
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 0,
            marginTop: 0,
          }}
          deviceWidth={width}
          isVisible={show}
        >
          <Container>
            <Backdrop
              onPressOut={({ touchHistory }) => {
                if (hasOnPressDown(touchHistory))
                  handlerToggleModalBankAccount();
              }}
            ></Backdrop>
            <Header>
              <Title>Contas de Pagamento</Title>
            </Header>
            <Content>
              {items.map((row: ItemProps) => {
                return (
                  <Item
                    onPress={() => {
                      handleSetSelected(row);
                      handlerToggleModalBankAccount();
                    }}
                    key={String(Math.random())}
                  >
                    <ItemIcon>
                      {row.type == "banco" ? (
                        <Icons.Bank width={25} height={25} />
                      ) : (
                        <Icons.CreditCard width={25} height={25} />
                      )}
                    </ItemIcon>
                    <ItemDescription>
                      <ItemTitle>{row.title}</ItemTitle>
                      <ItemLabel>{row.type}</ItemLabel>
                    </ItemDescription>

                    <ItemBalance>
                      <ItemBalanceTitle>Saldo</ItemBalanceTitle>
                      <ItemBalanceValue>R$ {row.balance}</ItemBalanceValue>
                    </ItemBalance>
                
                  </Item>
                );
              })}
            </Content>
          </Container>
        </Modal>
      )}
    </Context.Consumer>
  );
};

export default BankAccount;
