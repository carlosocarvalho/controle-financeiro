import React from "react";

interface KeyboardContract {
  show: boolean ;
  handleToggleShow(s?: boolean | undefined): void;
  value: string
  update(v: string): void
  defaultValue: string | null | number
  updateDefaultValue(v: string | null | undefined | number): void
}

export const KeyboardContext = React.createContext({} as KeyboardContract);

export const KeyboardProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<string>('000');
  const [defaultValue, setDefaultValue] = React.useState<string | null | number>('');
  function handleToggleShow(s?: boolean) {
    setShow(s || false);
  }

  function update(s: string) {
    setValue(s);
  }
  function updateDefaultValue(s?: string) {

    
    setDefaultValue(s || null);
  }
  return (
    <KeyboardContext.Provider
      value={{
        show,
        handleToggleShow,
        update,
        value,
        defaultValue,
        updateDefaultValue
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
