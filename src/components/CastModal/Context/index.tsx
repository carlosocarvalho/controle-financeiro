import React from "react";

interface CashContextProps {
  show: boolean;
  handleToggleCash(): void;
}

export const CashContext = React.createContext({} as CashContextProps);

export const CashProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(true);
  const [selected, setSelected] = React.useState<string | null>(null);

  function handleToggleCash() {
    setShow((s) => !s);
  }

  return (
    <CashContext.Provider
      value={{
        show,
        handleToggleCash,
      }}
    >
      {children}
    </CashContext.Provider>
  );
};
