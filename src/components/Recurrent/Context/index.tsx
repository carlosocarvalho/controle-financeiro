import React from "react";

interface RecurrentProps {
  show?: boolean | undefined;
  handleToggleRecurrent(): void;
  setRecurrent(recurrent: any): void;
  recurrent?: string | null;
}

export const RecurrentContext = React.createContext({} as RecurrentProps);

export const RecurrentProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [recurrent, setSelected] = React.useState<string | null>(null);
  function handleToggleRecurrent() {
    setShow((s) => !s);
  }
  function setRecurrent(recurrent: string | null) {
    setSelected(recurrent);
  }
  return (
    <RecurrentContext.Provider
      value={{
        show,
        handleToggleRecurrent,
        setRecurrent,
        recurrent,
      }}
    >
      {children}
    </RecurrentContext.Provider>
  );
};
