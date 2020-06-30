import React from "react";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

import {
  Container,
  Title,
  Value,
  Date,
  Wrapper,
  MainContainer,
  Backdrop,
  Header,
  HeaderTitle,
  Main,
} from "./styles";
import { View } from "react-native";
import { DepositContext } from "../../Context/DepositContext";
import { hasOnPressDown } from "../../../../helpers/EventHelper";

export type DepositProps = {
  title: string | null;
  value: string | null;
  date: string | null;
};



const Deposit: React.FC = () => {
    const { handleShow } = React.useContext(DepositContext)
  return (
    <DepositContext.Consumer>
      {({ show, items }) => (
        <Modal
          style={{ margin: 0 }}
          deviceWidth={width}
          isVisible={show}
        //   onBackdropPress={handleShow}
        >
          <Wrapper>
            <Backdrop 
               onPress={handleShow}
               onPressOut={({ touchHistory }: any) => {
                if (hasOnPressDown(touchHistory)) handleShow();
              }}
            />
            <Header>
              <HeaderTitle>Meus depositos</HeaderTitle>
            </Header>
            <Main>
              <MainContainer>
                {items.map(({ title, value, date }: DepositProps) => (
                  <Container key={String(Math.random())}>
                    <Title ellipsizeMode="tail" numberOfLines={2}>
                      {title}
                    </Title>
                    <View>
                      <Value>{value}</Value>
                      <Date>{date}</Date>
                    </View>
                  </Container>
                ))}
              </MainContainer>
            </Main>
          </Wrapper>
        </Modal>
      )}
    </DepositContext.Consumer>
  );
};

export default Deposit;
