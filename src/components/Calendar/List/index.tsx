import React from "react";
import Modal from "react-native-modal";
import { LocaleConfig, CalendarList } from "react-native-calendars";
import { Dimensions } from "react-native";
import { ThemeContext } from "styled-components";

const { width, height } = Dimensions.get("screen");

import locale from "./settings.locale";

LocaleConfig.locales["pt"] = locale;

LocaleConfig.defaultLocale = "pt";

import { CalendarContainer, CalendarContent, CalendarBackdrop } from "./styles";

import { CalendarContext } from "../Context";
import { hasOnPressDown } from "../../../helpers/EventHelper";

type CalendarDay = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};
const CA: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCalendar, handleCalendarSelected } = React.useContext(
    CalendarContext
  );

  return (
    <CalendarContext.Consumer>
      {({ show }) => (
        <Modal
          style={{ margin: 0 }}
          deviceWidth={width}
          isVisible={show}
          onBackdropPress={() => {}}
        >
          <CalendarContainer>
            <CalendarBackdrop
              onPressOut={({ touchHistory }): void => {
                if (hasOnPressDown(touchHistory)) handleToggleCalendar();
              }}
            ></CalendarBackdrop>
            <CalendarContent>
              <CalendarList
                onDayPress={(day: CalendarDay) => {
                  handleCalendarSelected(day.dateString);
                  handleToggleCalendar();
                }}
                horizontal={true}
                pagingEnabled={true}
                theme={{
                  textMonthFontWeight: "bold",
                  monthTextColor: theme.text,
                }}
                calendarWidth={width}
                style={{
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                }}
              />
            </CalendarContent>
          </CalendarContainer>
        </Modal>
      )}
    </CalendarContext.Consumer>
  );
};

export default CA;
