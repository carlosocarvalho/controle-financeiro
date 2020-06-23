import React from "react";
import { LocaleConfig, CalendarList } from "react-native-calendars";
import { Dimensions, Platform, View } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

import { ThemeContext } from "styled-components";
import VirtualKeyboard from "../VirtualKeybord";

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

import {
  Header,
  Container,
  HeaderContent,
  Visor,
  VisorText,
  CalendarContainer,
  CalendarContent,
  CalendarBackdrop,
  CategorieContent,
  CategorieHeader,
  CategorieHeaderTitle,
  CategorieHeaderContainer,
  CategorieContainer,
  KeyboardBackdrop,
  KeyboardContent,
  ButtonCloseKeyBoard,
  ButtonBackClose,
  ButtonSearchSearch,
} from "./styles";

const { width, height } = Dimensions.get("screen");

import * as Form from "../Form";

import F from "../Input";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { formatMoney } from "../../helpers/MoneyFormat";

type FormData = {
  date?: String;
  description?: String;
  categorie?: String;
};

export default function () {
  const theme = React.useContext(ThemeContext);
  const [visorText, setVisorText] = React.useState(formatMoney("100"));
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleKeyBoard, setVisibleKeyBoard] = React.useState(false);
  const [visibleCategorie, setVisibleCategorie] = React.useState(false);

  const validateOnCloseModal = ({ touchBank }) => {
    const obj = touchBank.filter((i) => i != undefined)[0];
    return obj.startPageY < obj.currentPageY;
  };

  return (
    <>
      <Header>
        <HeaderContent>
          <Visor>
            <TouchableWithoutFeedback
              onPress={() => {
                setVisibleKeyBoard(true);
              }}
            >
              <VisorText>{visorText}</VisorText>
            </TouchableWithoutFeedback>
          </Visor>
        </HeaderContent>
      </Header>
      <Container>
        <F.Input label="Descricao" />
        <F.TouchInput
          label="Data"
          onPress={() => setVisibleModal((s) => !s)}
          value="-"
          icon={{
            lib: MaterialCommunityIcons,
            name: "calendar-month-outline",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Categoria"
          onPress={() => setVisibleCategorie((s) => !s)}
          value=""
          icon={{
            lib: MaterialCommunityIcons,
            name: "format-list-bulleted",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Conta de Pagamento"
          onPress={() => setVisibleCategorie((s) => !s)}
          value=""
          icon={{
            lib: MaterialCommunityIcons,
            name: "briefcase-account-outline",
            size: 24,
          }}
        />
      </Container>
      <Modal
        style={{ margin: 0 }}
        deviceWidth={width}
        isVisible={visibleModal}
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

      <Modal
        style={{ margin: 0 }}
        deviceWidth={width}
        isVisible={visibleCategorie}
        onBackdropPress={() => console.log("consle....")}
      >
        <CategorieContainer>
          <CategorieHeader>
            <CategorieHeaderContainer>
              <ButtonBackClose onPress={() => setVisibleCategorie((v) => !v)}>
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color={theme.header.color}
                />
              </ButtonBackClose>

              <CategorieHeaderTitle>Categorias</CategorieHeaderTitle>
              <ButtonSearchSearch>
                <Feather name="search" color={theme.header.color} size={24} />
              </ButtonSearchSearch>
            </CategorieHeaderContainer>
          </CategorieHeader>
          <CategorieContent></CategorieContent>
        </CategorieContainer>
      </Modal>

      <Modal
        style={{ marginRight: 0, marginLeft: 0, marginBottom: 0, marginTop: 0 }}
        deviceWidth={width}
        isVisible={visibleKeyBoard}
        backdropOpacity={0}
      >
        <CalendarContainer>
          <KeyboardBackdrop
            onPressOut={({ touchHistory }) => {
              if (validateOnCloseModal(touchHistory))
                setVisibleKeyBoard((s) => !s);
            }}
          ></KeyboardBackdrop>
          <KeyboardContent
            screenHeight={Platform.OS === "ios" ? height - 150 : height - 170}
          >
            <ButtonCloseKeyBoard
              onPress={() => setVisibleKeyBoard((s) => !s)}
            />
            <VirtualKeyboard
              defaultValue={100}
              color={theme.primary}
              pressMode="string"
              onPress={(val) => {
                setVisorText(formatMoney(Number(val)));
              }}
            />
          </KeyboardContent>
        </CalendarContainer>
      </Modal>
    </>
  );
}
