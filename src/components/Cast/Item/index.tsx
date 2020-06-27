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

type RowProps = {
  data: ItemProps;
};

const Item: React.FC<RowProps> = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCastDetail, setCurrenCast } = React.useContext(CastContext);
  return (
    <React.Fragment>
      {data.isHeader ? (
        <Head>{data.title}</Head>
      ) : (
        <Container
          onPress={() => {
            setCurrenCast(data)
            handleToggleCastDetail();
          }}
        >
          <Feather
            size={20}
            name={data.isUp ? "arrow-up" : "arrow-down"}
            color={data.isUp ? theme.secondary : theme.danger}
          />
          <Content>
            <Title>{data.title}</Title>
            <Label>{!!data.account && data.account} </Label>
          </Content>
          <PriceContent>
            <Price>{data.value}</Price>
            <Feather
              size={20}
              name={data.paid ? "thumbs-up" : "thumbs-down"}
              color={data.paid ? theme.secondary : theme.light}
            />
          </PriceContent>
        </Container>
      )}
    </React.Fragment>
  );
};

Item.defaultProps = {
  data: { isHeader: false, isUp: true } as ItemProps,
};

export default Item;
