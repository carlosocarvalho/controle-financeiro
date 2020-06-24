import React from "react";

interface BankAccountContextProps {
  show: boolean
  handlerToggleModalBankAccount(): void
  handleSetSelected(selected:any): void
  selected?: object | null
};

export const BankAccountContext = React.createContext(
  {} as BankAccountContextProps
);

export const BankAccountProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState<object|null>(null)
  

  function handlerToggleModalBankAccount() {
    setShow((s) => !s);
  }
  function handleSetSelected(selected: object | null) {
      setSelected(selected)
  }

  return (
    <BankAccountContext.Provider
      value={{
        show,
        handlerToggleModalBankAccount,
        selected,
        handleSetSelected,
      }}
    >
      {children}
    </BankAccountContext.Provider>
  );
};
