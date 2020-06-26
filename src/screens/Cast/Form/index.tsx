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

const { width } = Dimensions.get("screen");

export default function () {
  const theme = React.useContext(ThemeContext);
  return (
    <CashContext.Consumer>
      {({ show }) => (
        <React.Fragment>
          <Modal
            style={{
              margin: 0,
            }}
            deviceWidth={width}
            isVisible={show}
          >
            <StatusBar
              backgroundColor={theme.primary}
              barStyle="light-content"
            />
            <Wrapper>
              <CategorieProvider>
                <CalendarProvider>
                  <BankAccountProvider>
                    <KeyboardProvider>
                      <CastModal />
                    </KeyboardProvider>
                  </BankAccountProvider>
                </CalendarProvider>
              </CategorieProvider>
            </Wrapper>
          </Modal>
        </React.Fragment>
      )}
    </CashContext.Consumer>
  );
}
