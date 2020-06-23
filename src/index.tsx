import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { StatusBar, Platform } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./themes/default";

import ModalFormContext from "./contexts/ModalFormContext";
import CastModal from "./components/CastModal";
import { useModalForm } from "./hooks/ModalFormHook";

export default function () {
  const p = useModalForm()
  return (
    <ModalFormContext.Provider value={p}>
      <ThemeProvider theme={{...theme, plaform: Platform.OS}}>
        <React.Fragment>
          <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
          <NavigationContainer>
            <Navigation />
           
          </NavigationContainer>

        </React.Fragment>
        
      </ThemeProvider>

     
    </ModalFormContext.Provider>
  );
}
