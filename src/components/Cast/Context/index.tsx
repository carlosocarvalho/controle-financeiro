import React from "react";

interface CastContextProps {
  show: boolean;
  handleToggleCast(): void;
  setCast(value: any): void;
  value?: string | null;
  showDetail: boolean;
  handleToggleCastDetail(): void;
}

export const CastContext = React.createContext({} as CastContextProps);

export const CastProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(true);
  const [showDetail, setDetailShow] = React.useState(false);
  const [value, setValue] = React.useState<string | null>(null);

  function handleToggleCast() {
    setShow((s) => !s);
  }
  function setCast(value: string | null) {
    setValue(value);
  }

  function handleToggleCastDetail(){
    setDetailShow(s => !s)
  }
  return (
    <CastContext.Provider
      value={{
        show,
        handleToggleCast,
        setCast,
        value,
        handleToggleCastDetail,
        showDetail
      }}
    >
      {children}
    </CastContext.Provider>
  );
};
