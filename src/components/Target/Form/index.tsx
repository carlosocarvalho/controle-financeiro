import React from "react";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

import {
  Container,
  Wrapper,
  MainContainer,
  Backdrop,
  Header,
  HeaderTitle,
  Main,
  ActionsContainer,
  Actions,
  ButtonCancel,
  ButtonSave,
} from "./styles";

import { DepositContext as Context } from "../Context/DepositContext";
import { hasOnPressDown } from "../../../helpers/EventHelper";

import F from '../../Input'

const Form: React.FC = () => {
  const { handleShowForm } = React.useContext(Context);
  return (
    <Context.Consumer>
      {({ showForm }) => (
        <Modal
          style={{ margin: 0 }}
          deviceWidth={width}
          isVisible={showForm}
          //   onBackdropPress={handleShowForm}
        >
          <Wrapper>
            <Backdrop
              onPress={handleShowForm}
              onPressOut={({ touchHistory }: any) => {
                if (hasOnPressDown(touchHistory)) handleShowForm();
              }}
            />
            <Header>
              <HeaderTitle>Adicionar Nova Meta</HeaderTitle>
            </Header>
            <Main>
              <MainContainer>
                <F.Input 
                  label="Digite o seu valor"
                //   style={{
                //       borderColor:'#ccc',
                //       borderWidth: 1,
                //       borderRadius: 3
                //   }}
                />
              </MainContainer>
              <ActionsContainer>
                  <Actions>
                    <ButtonSave>
                      <Octicons name="check" size={24} color="white" />
                    </ButtonSave>

                    <ButtonCancel onPress={() => handleShowForm()}>
                      <MaterialCommunityIcons
                        name="window-close"
                        size={24}
                        color="white"
                      />
                    </ButtonCancel>
                  </Actions>
                </ActionsContainer>
            </Main>
            <React.Fragment></React.Fragment>
          </Wrapper>
        </Modal>
      )}
    </Context.Consumer>
  );
};

export default Form;
