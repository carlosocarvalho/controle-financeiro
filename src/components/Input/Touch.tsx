import React from "react";

import * as Form from "./styles";
import { TouchInputProps } from "./@types";
import Icon from "./InputIcon";

const RC: React.FC<TouchInputProps> = ({
  onPress,
  value,
  label,
  icon,
  ...props
}) => {
  return (
    <Form.GroupTouch onPress={onPress}>
      <Form.Label>{label}</Form.Label>
      <Form.ViewInput>
        {icon !== null ? (
          <Icon name={icon && icon.name} lib={icon && icon.lib} size={icon && icon.size} />
        ) : null}
        <Form.ViewTextInput>{value}</Form.ViewTextInput>
      </Form.ViewInput>
    </Form.GroupTouch>
  );
};

RC.defaultProps = {
  icon: null,
  value: null,
  onPress: () => {},
};

export default RC;
