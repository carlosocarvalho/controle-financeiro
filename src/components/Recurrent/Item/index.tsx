import React, { FunctionComponent } from "react";
import { AntDesign } from "@expo/vector-icons";
import { RecurrentContext as Context } from "../Context";

import { Container, Title, IconContainer } from "./styles";

type ItemProps = {
  title: string;
  Icon?: any | null;
};

const Item: React.FC<ItemProps> = ({ title, Icon }) => {
  const { handleToggleRecurrent, setRecurrent } = React.useContext(Context);

  return (
    <Container
      onPress={() => {
        setRecurrent(title);
        handleToggleRecurrent();
      }}
    >
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
