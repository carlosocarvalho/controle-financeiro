import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navigation from "./navigation";
import { ThemeProvider } from "styled-components";
import ModalFormContext from "./contexts/ModalFormContext";
import { useModalForm } from "./hooks/ModalFormHook";
import { CashProvider } from "./components/CastModal/Context";
import ScreenCast from "./screens/Cast";
import light from "./themes/light";
import { CastProvider } from "./components/Cast/Context";
import { DepositProvider } from "./components/Target/Context/DepositContext";

import Screens from "./screens";
import { UserProvider } from "./screens/User/Context";

const Stack = createStackNavigator();

export default function () {
  const p = useModalForm();
  const theme: any = light[Platform.OS];

  return (
    <ModalFormContext.Provider value={p}>
      <ThemeProvider theme={{ ...theme, plaform: Platform.OS }}>
        <UserProvider>
          <CashProvider>
            <CastProvider>
              <DepositProvider>
                <React.Fragment>
                  <NavigationContainer >
                    {/* <Navigation /> */}
                    <Stack.Navigator 
                    initialRouteName="App"
                    headerMode="none">
                      <Stack.Screen name="Auth" component={Screens.Login} />
                      <Stack.Screen name="App" component={Navigation} />
                    </Stack.Navigator>
                  </NavigationContainer>
                  <ScreenCast.Form />
                  {/* <Cast.Modal /> */}
                </React.Fragment>
              </DepositProvider>
            </CastProvider>
          </CashProvider>
        </UserProvider>
      </ThemeProvider>
    </ModalFormContext.Provider>
  );
}
