import React from "react";
import { Wrapper } from "./styles";
import CastModal from "../../../components/CastModal";
import ModalFormContext from "../../../contexts/ModalFormContext";
import { StatusBar } from "react-native";
import { ThemeContext } from "styled-components";

export default function () {
  const theme = React.useContext(ThemeContext)
  return (
    <>
    <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <CastModal />
    </>
  );
}
