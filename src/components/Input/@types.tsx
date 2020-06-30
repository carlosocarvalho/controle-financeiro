import { ReactElement } from "react";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  icon?: IconInputProps;
  border?: boolean
}

export type TouchInputProps = {
  label: string,
  value: any,
  placeholder?: string,
  icon?: IconInputProps | null | undefined,
  onPress?: Function,
  border: false
}

export type IconInputProps = {
  name: string | null | undefined,
  lib: any | undefined,
  color?: string | null | undefined,
  size?: number
 
};
