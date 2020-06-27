import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { StatusBar, Platform } from "react-native";
import { ThemeProvider } from "styled-components";

import ModalFormContext from "./contexts/ModalFormContext";
import CastModal from "./components/CastModal";
import { useModalForm } from "./hooks/ModalFormHook";
import { CashProvider } from "./components/CastModal/Context";
import ScreenCast from "./screens/Cast";
import light from "./themes/light";
import { CastProvider } from "./components/Cast/Context";
import Cast from './components/Cast'

export default function () {
  const p = useModalForm();
  const theme = light[Platform.OS];

  return (
    <ModalFormContext.Provider value={p}>
      <ThemeProvider theme={{ ...theme, plaform: Platform.OS }}>
        <CashProvider>
          <CastProvider>
            <React.Fragment>
              <StatusBar
                backgroundColor={theme.primary}
                barStyle="light-content"
              />
              <NavigationContainer>
                <Navigation />
              </NavigationContainer>
              <ScreenCast.Form />
              <Cast.Modal />
            </React.Fragment>
          </CastProvider>
        </CashProvider>
      </ThemeProvider>
    </ModalFormContext.Provider>
  );
}
