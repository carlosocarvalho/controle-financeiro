import React, { FunctionComponent } from "react";
import { AntDesign } from "@expo/vector-icons";
import { CategorieContext as Context } from "../Context";

import { Container, Title, IconContainer } from "./styles";
import Icons from "../../Icons";
type ItemProps = {
  title: string;
  Icon?: any | null;
};

const Item: React.FC<ItemProps> = ({ title, Icon }) => {
 

  const { handleCatSelected, toggleShow } = React.useContext(Context)
   
  return (
    <Container onPress={() => {
         handleCatSelected({title})
         toggleShow()
    }}>
      {!!Icon && (
        <IconContainer>
          <Icon width={25} height={25} />
        </IconContainer>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Item;
