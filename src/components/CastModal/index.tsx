import React from "react";
import { Header, Container, HeaderContent, Visor, VisorText } from "./styles";
import ModalFormContext from "../../contexts/ModalFormContext";

export default function () {
  const [visorText, setVisorText] = React.useState("0,00");

  return (
    <>
      <Header>
        <HeaderContent>
          <Visor>
            <VisorText onPress={()=>{
              console.log('focus....')
            }}>{visorText}</VisorText>
          </Visor>
        </HeaderContent>
      </Header>
      <Container></Container>
    </>
  );
}
