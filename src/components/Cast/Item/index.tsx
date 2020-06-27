import React from "react";
import { Feather, MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import {
  Container,
  Content,
  PriceContent,
  Title,
  Label,
  Price,
  PriceLabel,
  Head,
} from "./styles";
import { ThemeContext } from "styled-components";
import { CastContext } from "../Context";

export type ItemProps = {
  value?: string;
  title: string;
  date?: string;
  account?: string;
  paid?: boolean;
  type: string;
  isHeader: boolean;
  isUp: boolean;
};

const Item: React.FC<ItemProps> = ({
  title,
  account,
  type,
  isHeader,
  isUp,
  value,
  paid,
}) => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCastDetail} = React.useContext(CastContext)
  return (
    <React.Fragment>
      {isHeader ? (
        <Head>{title}</Head>
      ) : (
        <Container 
        
        onPress={() => {
          handleToggleCastDetail()
        }}
        >
          <Feather
            size={20}
            name={isUp ? "arrow-up" : "arrow-down"}
            color={isUp ? theme.secondary : theme.danger}
          />
          <Content>
            <Title>{title}</Title>
            <Label>{!!account && account} </Label>
          </Content>
          <PriceContent>
            <Price>{value}</Price>
            <Feather
              size={20}
              name={paid ? "thumbs-up" : "thumbs-down"}
              color={paid ? theme.secondary : theme.light}
            />
          </PriceContent>
        </Container>
      )}
    </React.Fragment>
  );
};

Item.defaultProps = {
  isHeader: false,
  isUp: true,
};

export default Item;
