import React from "react";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";
import { ThemeContext } from "styled-components";
import { Wrapper } from "./styles";
const { width, height } = Dimensions.get("window");
import FormConsumer from "../../Form";
import { CashContext } from "../../../CastModal/Context";
import { CastContext } from "../../Context";

export default function () {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCastForm } = React.useContext(CastContext);
  const { show } = React.useContext(CashContext);
  // React.useEffect(() => {
  //   if (show === false) handleToggleCastForm();
  // }, [show]);
  return (
        <React.Fragment>
          <Modal
            deviceWidth={width}
            isVisible={show}
            style={{
              margin: 0,
            }}
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
    
  );
}
