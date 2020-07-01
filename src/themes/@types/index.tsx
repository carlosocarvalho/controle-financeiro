import BankAccount from "./BankAccount";
import Card from "./Card";
import Sizes from "./Sizes";
import Target from "./Target";
import Form from './Form'
import Header from './Header'
import Buttons  from './Buttons'
export default interface ThemeContract {
  theme: {
    card: Card;
    bankAccount: BankAccount;
    sizes: Sizes;
    header: Header;
    rawSizes: Sizes;
    target: Target;
    primary: string;
    secondary: string;
    danger: string;
    light: string;
    text: string;
    primary900: string;
    white: string;
    gray: string;
    form: Form;
    button: Buttons
  };
}
