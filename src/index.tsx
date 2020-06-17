import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./themes/default";

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}
