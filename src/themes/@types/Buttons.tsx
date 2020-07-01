interface ButtonProps {
  color: string;
  background: string;
  border: string;
  width: string;
  height: string;
}

export default interface Buttons {
  primary: ButtonProps;
  danger: ButtonProps;
  light: ButtonProps;
  primaryOutline: ButtonProps;
}
