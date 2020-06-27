import React from "react";

interface CashContextProps {
  show: boolean;
  handleToggleCash(o?: boolean | undefined): void;
  closed: boolean;
  onClose(o?: boolean | undefined): void;
}

export const CashContext = React.createContext({} as CashContextProps);

export const CashProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [closed, setClose] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  function handleToggleCash(o?: boolean | undefined) {
    setShow((s) => (o == undefined ? !s : o));
    if (o === true) {
      setClose(false);
    }
  }

  function onClose(o?: boolean | undefined) {
    if (o !== undefined && o === true) {
      setShow(false);
      setClose(true);
      setTimeout(() => {
        setClose(false)
      }, 3000)
    }
  }

  return (
    <CashContext.Provider
      value={{
        show,
        handleToggleCash,
        closed,
        onClose,
      }}
    >
      {children}
    </CashContext.Provider>
  );
};
