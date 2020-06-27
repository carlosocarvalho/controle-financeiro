import React from "react";
import CastModal from "../../../components/CastModal";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";

import { StatusBar } from "react-native";
import { ThemeContext } from "styled-components";
import { CategorieProvider } from "../../../components/Categories/Context";
import { CalendarProvider } from "../../../components/Calendar/Context";
import { BankAccountProvider } from "../../../components/BankAccount/Context";
import { CashContext } from "../../../components/CastModal/Context";
import { Wrapper } from "./styles";
import { KeyboardProvider } from "../../../components/Keyboard/Context";
import { RecurrentProvider } from "../../../components/Recurrent/Context";

const { width, height } = Dimensions.get("screen");

import FormConsumer from "../../../components/Cast/Form";

export default function () {
  const theme = React.useContext(ThemeContext);
  const [visible, setVisible] = React.useState(false)
  const { show } = React.useContext(CashContext)
  React.useEffect(() => { 
     setVisible(show)
  }, [show])
  return (
    // <CashContext.Consumer>
    //   {({ show }) => (
        <React.Fragment>
          <Modal
            style={{
              margin: 0,
              position: "absolute",
              zIndex: 20000,
              width: "100%",
              height: height,
            }}
            deviceWidth={width}
            isVisible={visible}
          >
            <StatusBar
              backgroundColor={theme.primary}
              barStyle="light-content"
            />
            <Wrapper>
              <FormConsumer />
            </Wrapper>
          </Modal>
        </React.Fragment>
    //   )}
    // </CashContext.Consumer>
  );
}
