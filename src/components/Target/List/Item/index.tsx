import React from "react";
import {
  Container,
  Title,
  Value,
  ProgressContainer,
  ProgressBarValue,
  Line,
  DepositContainer,
  Label,
  DepositLine,
} from "./styles";
import Deposit, { DepositProps } from "../Deposit";

type TargetItemPros = {
  title: string;
  target: number;
  value: number;
  percentual: number;
  items: Array<DepositProps>;
};

type ComponentProps = {
  data?: TargetItemPros;
};

import { Card, CardHeader, CardBody } from "../../../Card";
import { DepositContext } from "../../Context/DepositContext";

const Item: React.FC<ComponentProps> = ({ data }) => {
  const { setItems, handleShow } = React.useContext(DepositContext);
  const [items, setArrayItems] = React.useState<Array<DepositProps>>([]);
  React.useEffect(() => {
    if (data !== undefined) {
      setArrayItems(data.items);
    }
  }, [data]);

  const openCardDeposit = () => {
    setItems(items);
    handleShow();
  };

  return (
    <Container onPress={openCardDeposit}>
      <Card>
        <CardBody>
          <Title>{data?.title}</Title>
          <Line />
          <Value>{data?.value}</Value>
          <ProgressContainer>
            <ProgressBarValue
              style={{
                width: `${data?.percentual}%`,
              }}
            ></ProgressBarValue>
          </ProgressContainer>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Item;
