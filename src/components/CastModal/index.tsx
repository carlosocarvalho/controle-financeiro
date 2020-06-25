import React from "react";
import { LocaleConfig, CalendarList } from "react-native-calendars";
import { Dimensions, Platform, View, ImagePickerResult } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Octicons } from "@expo/vector-icons";

import { ThemeContext } from "styled-components";
import VirtualKeyboard from "../VirtualKeybord";

import {
  Header,
  Container,
  HeaderContent,
  Visor,
  VisorText,
  CalendarContainer,
  KeyboardBackdrop,
  KeyboardContent,
  ButtonCloseKeyBoard,
  DocumentUpContainer,
  DocumentUpText,
  DocumentDownContainer,
  DocumentDownText,
  DocumentDownIcon,
  ButtonSave,
  ActionsContainer,
  ButtonCancel,
} from "./styles";

const { width, height } = Dimensions.get("screen");

import F from "../Input";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { formatMoney } from "../../helpers/MoneyFormat";
import Categories from "../Categories";
import Calendar from "../Calendar";
import { BankAccountContext } from "../BankAccount/Context";
import BankAccount from "../BankAccount";
import { hasOnPressDown } from "../../helpers/EventHelper";
import { CashContext } from "./Context";

type FormData = {
  date?: string | null;
  description?: string | null;
  categorie?: string | null;
  account?: string | null;
};

export default function () {
  const theme = React.useContext(ThemeContext);
  const CategorieContext = React.useContext(
    Categories.Context.CategorieContext
  );
  const CalendarContext = React.useContext(Calendar.Context.CalendarContext);
  const { handlerToggleModalBankAccount, selected } = React.useContext(
    BankAccountContext
  );

  const { handleToggleCash } = React.useContext(CashContext);

  const [visorText, setVisorText] = React.useState(formatMoney("100"));
  const [visibleKeyBoard, setVisibleKeyBoard] = React.useState(false);
  const [form, setForm] = React.useState<FormData>({});
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    if (selected !== null) setForm({ ...form, ...{ account: selected.title } });
  }, [selected]);

  React.useEffect(() => {
    if (CategorieContext.selected !== null)
      setForm({ ...form, ...{ categorie: CategorieContext.selected.title } });
  }, [CategorieContext.selected]);

  React.useEffect(() => {
    if (CategorieContext.selected !== null)
      setForm({ ...form, ...{ date: CalendarContext.selected } });
  }, [CalendarContext.selected]);

  React.useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Oi, nessa fase do projeto pode ser necessário acessar a galeria de fotos, tudo bem ?"
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
          onPress={CalendarContext.handleToggleCalendar}
          value={!!form.date && form.date}
          icon={{
            lib: MaterialCommunityIcons,
            name: "calendar-month-outline",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Categoria"
          onPress={CategorieContext.toggleShow}
          value={!!form.categorie && form.categorie}
          icon={{
            lib: MaterialCommunityIcons,
            name: "format-list-bulleted",
            size: 24,
          }}
        />
        <F.TouchInput
          label="Conta de Pagamento"
          onPress={handlerToggleModalBankAccount}
          value={!!form.account && form.account}
          icon={{
            lib: MaterialCommunityIcons,
            name: "briefcase-account-outline",
            size: 24,
          }}
        />

        <F.Input label="Observacao" numberOfLines={4} />
        {image === null ? (
          <DocumentUpContainer onPress={pickImage}>
            <DocumentUpText>Nenhum Documento</DocumentUpText>
          </DocumentUpContainer>
        ) : (
          <DocumentDownContainer>
            <DocumentDownText>Documento da operacao </DocumentDownText>
            <DocumentDownIcon
              onPress={() => {
                setImage(null);
              }}
            >
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color={theme.text}
              />
            </DocumentDownIcon>
          </DocumentDownContainer>
        )}
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
              if (hasOnPressDown(touchHistory)) setVisibleKeyBoard((s) => !s);
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
      <ActionsContainer>
        <ButtonSave>
          <Octicons name="check" size={24} color="white" />
        </ButtonSave>

        <ButtonCancel onPress={handleToggleCash}>
          <MaterialCommunityIcons name="window-close" size={24} color="white" />
        </ButtonCancel>
      </ActionsContainer>
    </>
  );
}
