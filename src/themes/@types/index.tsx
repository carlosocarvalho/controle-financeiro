import BankAccount from "./BankAccount";
import Card from "./Card";
import Sizes from "./Sizes";
import Target from "./Target";

export default interface ThemeContract {
  theme: {
    card: Card;
    bankAccount: BankAccount;
    sizes: Sizes;
    target: Target;
    primary: string;
    secondary: string;
    danger: string;
    light: string;
    primary900: string;
    white: string;
    gray: string;
  };
}
