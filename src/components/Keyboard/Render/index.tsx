import React from "react";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Dimensions, Platform } from "react-native";
import { ThemeContext } from "styled-components";
import { KeyboardContext } from "../Context";
import VirtualKeyboard from "../../VirtualKeybord";
import {
  Container,
  Backdrop,
  Content,
  ButtonCloseKeyBoard,
  ActionsContainer,
  ButtonSave,
} from "./styles";

const { width, height } = Dimensions.get("screen");

const Render: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const {
    defaultValue,
    updateDefaultValue,
    handleToggleShow,
    update,
    value,
  } = React.useContext(KeyboardContext);
  React.useEffect(() => {
    updateDefaultValue(defaultValue);
  }, []);
  return (
    <KeyboardContext.Consumer>
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
          backdropOpacity={0}
        >
          <Container>
            <Backdrop onPressOut={({ touchHistory }) => {}}></Backdrop>
            <Content
              screenHeight={Platform.OS === "ios" ? height - 150 : height - 170}
            >
              <ButtonCloseKeyBoard onPress={() => handleToggleShow(false)} />
              <VirtualKeyboard
                defaultValue={defaultValue}
                color={theme.primary}
                pressMode="string"
                onPress={(val) => {
                  update( (["","0","00"].indexOf(value) > -1 ) || !val ? "000" : val);
                }}
              />
              <ActionsContainer>
                <ButtonSave onPress={() => handleToggleShow(false)}>
                  <MaterialCommunityIcons
                    name="window-close"
                    size={24}
                    color="white"
                  />
                </ButtonSave>
              </ActionsContainer>
            </Content>
          </Container>
        </Modal>
      )}
    </KeyboardContext.Consumer>
  );
};

export default Render;
