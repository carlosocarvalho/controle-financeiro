import React from "react";


interface CalendarContextProps{
  show: boolean
  handleToggleCalendar(): void
  handleCalendarSelected(selected:any): void
  selected?: string | null
};

export const CalendarContext = React.createContext({} as CalendarContextProps);

export const CalendarProvider: React.FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  function handleToggleCalendar() {
      setShow( (s) => !s)
  }
  function handleCalendarSelected(selected: string | null) {
    setSelected(selected)
}
  return (
    <CalendarContext.Provider
      value={{
        show,
        handleToggleCalendar,
        handleCalendarSelected,
        selected,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
