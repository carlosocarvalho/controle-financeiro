import React from "react";

interface CategorieProps{
  show?: boolean | undefined;
  toggleShow(): void;
};

export const CategorieContext = React.createContext({} as CategorieProps);

export const CategorieProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  function toggleShow() {
    setShow((s) => !s);
  }
  return (
    <CategorieContext.Provider
      value={{
        show,
        toggleShow,
      }}
    >
      {children}
    </CategorieContext.Provider>
  );
};
