import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { StatusBar, Platform } from "react-native";
import { ThemeProvider } from "styled-components";

import ModalFormContext from "./contexts/ModalFormContext";
import CastModal from "./components/CastModal";
import { useModalForm } from "./hooks/ModalFormHook";
import { CashProvider } from "./components/CastModal/Context";
import Cast from "./screens/Cast";
import light from "./themes/light";

export default function () {
  const p = useModalForm();
  const theme = light[Platform.OS];
  

  return (
    <ModalFormContext.Provider value={p}>
      <ThemeProvider theme={{ ...theme, plaform: Platform.OS }}>
        <CashProvider>
          <React.Fragment>
            <StatusBar
              backgroundColor={theme.primary}
              barStyle="light-content"
            />
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
            <Cast.Form />
          </React.Fragment>
        </CashProvider>
      </ThemeProvider>
    </ModalFormContext.Provider>
  );
}
