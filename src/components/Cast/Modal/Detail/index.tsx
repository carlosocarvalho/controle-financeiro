import React from 'react'
import Modal from "react-native-modal";

import { CastContext } from "../../Context";
import  { Container,Backdrop  } from './styles'
import { Dimensions } from 'react-native';


const { width } = Dimensions.get("screen");

const Detail = () => {
  return (
    <CastContext.Consumer>
      {({ showDetail }) => (
        <Modal
          style={{ margin: 0 }}
          deviceWidth={width}
          isVisible={showDetail}
          onBackdropPress={() => }
        >
          <Container>
            <Backdrop
            //   onPress={() => }
            //   onPressOut={({ touchHistory }) => {
            //     const { touchBank } = touchHistory;
            //     const obj = touchBank.filter((i) => i != undefined)[0];

            //     if (obj.startPageY < obj.currentPageY) setShowModal((s) => !s);
            //   }}
            ></Backdrop>
           
          </Container>
        </Modal>
      )}
    </CastContext.Consumer>
  );
};


export default Detail