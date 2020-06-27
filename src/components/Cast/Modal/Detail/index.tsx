import React from "react";
import Modal from "react-native-modal";

import { CastContext } from "../../Context";
import { Container, Backdrop, Content } from "./styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

import Cash from "../../../ModalboxCash";
import { hasOnPressDown } from "../../../../helpers/EventHelper";
import Form from "../Form";
import { CashContext } from "../../../CastModal/Context";

const Detail = () => {
  const {
    current,
    handleToggleCastDetail,
  } = React.useContext(CastContext);
  const { handleToggleCash } = React.useContext(CashContext);
  const handleToggleForm = () => {
    handleToggleCash();
  };

  return (
    <CastContext.Consumer>
      {({ showDetail }) => (
        <Modal style={{ margin: 0 }} deviceWidth={width} isVisible={showDetail}>
          <Container>
            <Backdrop
              //   onPress={() => {}}
              onPressOut={({ touchHistory }) => {
                if (hasOnPressDown(touchHistory)) handleToggleCastDetail();
              }}
            ></Backdrop>
            <Content>
              <Cash
                onSelect={(data: any) => {
                  handleToggleForm();
                }}
                data={current}
              />
            </Content>
            <Form />
          </Container>
        </Modal>
      )}
    </CastContext.Consumer>
  );
};

export default Detail;
