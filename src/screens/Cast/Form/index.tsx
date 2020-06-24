import React from "react";
import { Wrapper } from "./styles";
import CastModal from "../../../components/CastModal";
import ModalFormContext from "../../../contexts/ModalFormContext";
import { StatusBar } from "react-native";
import { ThemeContext } from "styled-components";
import { CategorieProvider } from "../../../components/Categories/Context";
import { CalendarProvider } from "../../../components/Calendar/Context";
import { BankAccountProvider } from "../../../components/BankAccount/Context";

export default function () {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <CategorieProvider>
        <CalendarProvider>
          <BankAccountProvider>
            <CastModal />
          </BankAccountProvider>
        </CalendarProvider>
      </CategorieProvider>
    </>
  );
}
