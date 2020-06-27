import React from "react";

interface CashContextProps {
  show: boolean;
  screen: boolean;
  setScreen(o?: boolean | undefined): void;
  handleToggleCash(o?: boolean | undefined): void;
 
}

export const CashContext = React.createContext({} as CashContextProps);

export const CashProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [screen, setIsScreen] = React.useState(false);
  
  // const [selected, setSelected] = React.useState<string | null>(null);


  function handleToggleCash(o?: boolean | undefined) {
    setShow((s) => (o == undefined ? !s : o));
   
  }

  function setScreen(o?: boolean | undefined) {
    setIsScreen((s) => (o == undefined ? false : o));
  }

  return (
    <CashContext.Provider
      value={{
        show,
        handleToggleCash,
        screen,
        setScreen,
      }}
    >
      {children}
    </CashContext.Provider>
  );
};
