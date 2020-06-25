import React from "react";

interface CategorieProps {
  show?: boolean | undefined;
  toggleShow(): void;
  handleCatSelected(selected: any): void;
  selected?: object | null;
}

export const CategorieContext = React.createContext({} as CategorieProps);

export const CategorieProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState<object | null>(null);
  function toggleShow() {
    setShow((s) => !s);
  }
  function handleCatSelected(selected: object | null) {
    setSelected(selected);
  }
  return (
    <CategorieContext.Provider
      value={{
        show,
        toggleShow,
        handleCatSelected,
        selected,
      }}
    >
      {children}
    </CategorieContext.Provider>
  );
};
