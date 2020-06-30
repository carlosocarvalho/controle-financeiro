import React from "react";
import { DepositProps } from "../List/Deposit";

/**
 * @interface DepositContract
 */
interface DepositContract {
  show: boolean;
  handleShow(): void;
  items: Array<DepositProps>;
  setItems(items: Array<DepositProps>): void;
  form: any;
  setForm(form: any): void;
  showForm: boolean;
  handleShowForm(): void;
}

export const DepositContext = React.createContext({} as DepositContract);

export const DepositProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [items, setArrayItems] = React.useState<Array<DepositProps>>([]);
  const [form, handleForm] = React.useState(null);
  function handleShow() {
    setShow((s) => !s);
  }

  function setForm(form: any) {
    handleForm(form);
  }

  function setItems(items: Array<DepositProps>) {
    setArrayItems(items);
  }

  function handleShowForm() {
    setShowForm((s) => !s);
  }
  return (
    <DepositContext.Provider
      value={{
        handleShow,
        show,
        items,
        setItems,
        form,
        setForm,
        handleShowForm,
        showForm,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
};
