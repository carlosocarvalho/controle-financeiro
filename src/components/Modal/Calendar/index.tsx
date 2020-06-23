import React from 'react'
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { LocaleConfig, CalendarList } from "react-native-calendars";

import {
    Header,
    Container,
    HeaderContent,
    Visor,
    VisorText,
    CalendarContainer,
    CalendarContent,
    CalendarBackdrop,
  } from "./styles";

LocaleConfig.locales["pt"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Marco",
      "Avbril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terca",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    today: "Hoje",
  };
  
  LocaleConfig.defaultLocale = "pt";

  

interface CalendarProps {
    visible: boolean
}

export default function CalendarModal<CalendarProps> ({visible}) {
   
     return (


        <Modal
        style={{ margin: 0 }}
        deviceWidth={width}
        isVisible={visible}
        onBackdropPress={() => console.log("consle....")}
      >
        <CalendarContainer>
          <CalendarBackdrop
            onPressOut={({ touchHistory }) => {
              if (validateOnCloseModal(touchHistory))
                setVisibleModal((s) => !s);
            }}
          ></CalendarBackdrop>
          <CalendarContent>
            <CalendarList
              onDayPress={(day) => {
                console.log("selected day", day);
              }}
              // Enable horizontal scrolling, default = false
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              // Set custom calendarWidth.
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
     )
}