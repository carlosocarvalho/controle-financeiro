import React from "react";
import { LocaleConfig, CalendarList } from "react-native-calendars";
import { Dimensions, Platform, View } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

import { ThemeContext } from "styled-components";
import VirtualKeyboard from "../VirtualKeybord";

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

import F from "../Input";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { formatMoney } from "../../helpers/MoneyFormat";
import Categories from "../Categories";
import Calendar from "../Calendar";
import { BankAccountContext } from "../BankAccount/Context";
import BankAccount from "../BankAccount";

type FormData = {
  date?: String;
  description?: String;
  categorie?: String;
};

export default function () {
  const theme = React.useContext(ThemeContext);
  const { toggleShow } = React.useContext(Categories.Context.CategorieContext);
  const { handleToggleCalendar } = React.useContext(
    Calendar.Context.CalendarContext
  );
  const { handlerToggleModalBankAccount, selected } = React.useContext(
    BankAccountContext
  );

  const [visorText, setVisorText] = React.useState(formatMoney("100"));
  const [visibleKeyBoard, setVisibleKeyBoard] = React.useState(false);
  const [form, setForm] = React.useState<object>({});

  React.useEffect(() => {
    if( selected !== null)
    setForm({ ...form, ...{ categorie: selected.title } });
  }, [selected]);

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
          onPress={handleToggleCalendar}
          value="-"
          icon={{
            lib: MaterialCommunityIcons,
            name: "calendar-month-outline",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Categoria"
          onPress={toggleShow}
          value=""
          icon={{
            lib: MaterialCommunityIcons,
            name: "format-list-bulleted",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Conta de Pagamento"
          onPress={handlerToggleModalBankAccount}
          value={!!form.categorie && form.categorie}
          icon={{
            lib: MaterialCommunityIcons,
            name: "briefcase-account-outline",
            size: 24,
          }}
        />
      </Container>
      <Calendar.List />
      <Categories.List />
      <BankAccount.Modal />

      <Modal
        style={{
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 0,
        }}
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
