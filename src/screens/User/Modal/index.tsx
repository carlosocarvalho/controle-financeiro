import React from "react";
import Modal from "react-native-modal";
import { Dimensions, View } from "react-native";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const avatar = require("../../../images/avatar.png");

import {
  HeaderContainer,
  Wrapper,
  MainContainer,
  Header,
  Title,
  Main,
  ButtonBackClose,
  Actions,
  ActionsContainer,
  Label,
  Row,
  Col,
  Strong,
  Space,
  AvatarContainer,
  Avatar,
} from "./styles";

import { UserContext } from "../Context/";
import { ThemeContext } from "styled-components";
import Buttom from "../../../components/Buttom";
import { Card, CardBody, CardHeader } from "../../../components/Card";
// import { hasOnPressDown } from "../../../helpers/EventHelper";

const ProfileModal: React.FC<any> = () => {
  const { handleShowProfile } = React.useContext(UserContext);
  const theme = React.useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <UserContext.Consumer>
      {({ showProfile }) => (
        <Modal
          style={{ margin: 0 }}
          deviceWidth={width}
          isVisible={showProfile}
          //   animationIn="bounceIn"
          //   animationOut="bounceOutLeft"
          //   onBackdropPress={handleShowProfileModal}
        >
          <Wrapper>
            <Header colors={["#FFF", "#E6E6E6"]}>
              <HeaderContainer>
                <ButtonBackClose onPress={handleShowProfile}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={24}
                    color={theme.text}
                  />
                </ButtonBackClose>
                <Row alignItems="center">
                  <Title>Minha Conta</Title>
                </Row>
              </HeaderContainer>
            </Header>
            <Main>
              <MainContainer>
                <Row alignItems="center" justifyContent="center">
                  <AvatarContainer>
                    <Avatar source={avatar} resizeMode="contain" />
                  </AvatarContainer>
                </Row>
                <Card>
                  <CardHeader>
                    <Title>Meus dados</Title>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Nome</Strong>
                        </Label>
                      </Col>
                      <Label>Carlos J. Carvalho</Label>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Idade</Strong>
                        </Label>
                      </Col>
                      <Label>29 anos</Label>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>N.I.</Strong>
                        </Label>
                      </Col>
                      <Label>92928920029-92</Label>
                    </Row>
                  </CardBody>
                  <CardHeader>
                    <Title>Dados no Money</Title>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Conta</Strong>
                        </Label>
                      </Col>
                      <Label>Basic</Label>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Status</Strong>
                        </Label>
                      </Col>
                      <Label>Ativo</Label>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Contas</Strong>
                        </Label>
                      </Col>
                      <Label>2/2</Label>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          <Strong>Cartoes</Strong>
                        </Label>
                      </Col>
                      <Label>2/2</Label>
                    </Row>
                  </CardBody>
                  <CardHeader></CardHeader>
                  <CardBody>
                    <Row>
                      <Buttom label="Apagar Conta" type="danger" />
                      <Space />
                      <Buttom
                        label="Sair"
                        onPress={() => {
                          handleShowProfile();
                          navigation.navigate("Auth");
                        }}
                        type="primaryOutline"
                      />
                    </Row>
                  </CardBody>
                </Card>
                <Space />
                <Space />
              </MainContainer>
              <Space />
              {/* <ActionsContainer>
                <Actions>
                  <Buttom label="Apagar Conta" type="danger" />

                  <Buttom label="Sair" type="primaryOutline" />
                </Actions>
              </ActionsContainer> */}
            </Main>
          </Wrapper>
        </Modal>
      )}
    </UserContext.Consumer>
  );
};

export default ProfileModal;
