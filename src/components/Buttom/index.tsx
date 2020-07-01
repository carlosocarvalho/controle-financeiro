import React from "react";

import { Buttom, Label } from "./styles";
type ButtomComponentProps = {
  type?: string;
  label: string;
  onPress?: Function
};

const B: React.FC<ButtomComponentProps> = ({ type, label, onPress }) => {
  return (
    <Buttom  onPress={onPress} colorName={type}>
      <Label colorName={type}>{label}</Label>
    </Buttom>
  );
};

B.defaultProps = {
  type: "primary",
  onPress: () => {}
};

export default B;
