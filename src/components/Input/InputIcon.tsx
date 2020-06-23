import React from "react";

import * as Form from "./styles";
import { IconInputProps } from "./@types";
import { ThemeContext } from "styled-components";

const RC: React.FC<IconInputProps> = ({ lib: Icon, size, name, color, ...props }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Form.ViewInputIcon>
      <Icon
        name={name}
        size={size}
        color={color || theme.form.input.color}
      />
    </Form.ViewInputIcon>
  );
};

RC.defaultProps = {
  size: 20,
  color: null
};

export default RC;
