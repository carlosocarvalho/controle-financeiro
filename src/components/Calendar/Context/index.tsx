import React from "react";
import { CalendarContent } from "../../CastModal/styles";

type CalendarContextProps = {
  show: boolean;
  handleToggleCalendar(): void;
};

export const CalendarContext = React.createContext({} as CalendarContextProps);

export const CalendarProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  function handleToggleCalendar() {
      setShow( (s) => !s)
  }
  return (
    <CalendarContext.Provider
      value={{
        show,
        handleToggleCalendar,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
