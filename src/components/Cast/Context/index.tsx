import React from "react";

interface CastContextProps {
  show: boolean;
  handleToggleCast(): void;
  setCast(value: any): void;
  value?: string | null;
  showDetail: boolean;
  handleToggleCastDetail(): void;
  setCurrenCast(value: any): void;
  current?: object | null;
  showForm: boolean
  handleToggleCastForm(o?: boolean | undefined): void;
}

export const CastContext = React.createContext({} as CastContextProps);

export const CastProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [showDetail, setDetailShow] = React.useState(false);
  const [showForm, setForm] = React.useState(false);
  const [value, setValue] = React.useState<string | null>(null);
  const [current, setCurrent] = React.useState<object | null>(null);

  function handleToggleCast() {
    setShow((s) => !s);
  }
  function setCast(value: string | null) {
    setValue(value);
  }

  function setCurrenCast(value: object | null) {
    setCurrent(value);
  }

  function handleToggleCastDetail() {
    setDetailShow((s) => !s);
  }

  function  handleToggleCastForm(o?: boolean | undefined) {
    setForm((s) => o !== undefined ? o : !s);
  }
  return (
    <CastContext.Provider
      value={{
        show,
        handleToggleCast,
        setCast,
        value,
        handleToggleCastDetail,
        showDetail,
        current,
        setCurrenCast,
        handleToggleCastForm,
        showForm
      }}
    >
      {children}
    </CastContext.Provider>
  );
};
