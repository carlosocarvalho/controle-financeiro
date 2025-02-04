import React from "react";

import { Container } from "./styles";
import Item, { ItemProps } from "../Item";
import Detail from "../Modal/Detail";

type ListProps = {
  data: Array<ItemProps>;
};

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <>
      <Container>
        {!!data &&
          data.map((item: ItemProps) => (
            <Item key={String(Math.random())} data={item} />
          ))}
      </Container>
      <Detail />
    </>
  );
};

export default List;
