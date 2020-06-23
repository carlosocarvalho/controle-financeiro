import React from "react";

import * as Form from "./styles";
import { TextInputProps } from "./@types";

const RC: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Input {...props} />
    </Form.Group>
  );
};

RC.defaultProps = {};

export default RC;
