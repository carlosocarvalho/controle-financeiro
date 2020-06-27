import React from "react";
import Modal from "react-native-modal";

import { CastContext } from "../../Context";
import { Container, Backdrop, Content } from "./styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

import Cash from "../../../ModalboxCash";
import { hasOnPressDown } from "../../../../helpers/EventHelper";
import Form from "../Form";

const Detail = () => {
  const {
    current,
    showDetail,
    handleToggleCastDetail,
    handleToggleCastForm,
  } = React.useContext(CastContext);

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
                  handleToggleCastForm();
                  
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
