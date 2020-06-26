import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import * as Keyboard from "./styles";
import { KeyboardContext } from "../Keyboard/Context";

type VirtualKeyboardProps = {
  pressMode?: string;
  color?: string;
  onPress: Function;
  backspaceImg?: number;
  applyBackspaceTint?: boolean;
  decimal?: boolean;
  rowStyle?: object;
  cellStyle?: object;
  style?: object;
  defaultValue?: any | null;
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  pressMode,
  backspaceImg,
  applyBackspaceTint,
  color,
  rowStyle,
  cellStyle,
  decimal,
  style,
  onPress,
}) => {
  const [text, setText] = React.useState<string | null>("");
  const { value } = React.useContext(KeyboardContext);
  React.useEffect(() => {
    setText(value);
  }, []);
  function Backspace() {
    return (
      <Keyboard.Backspace
        accessibilityLabel="backspace"
        onPress={() => {
          keyPress("back");
        }}
      >
        <MaterialCommunityIcons
          name="backspace-outline"
          size={28}
          color={color}
        />
      </Keyboard.Backspace>
    );
  }

  function Clear() {
    return (
      <Keyboard.Cell
        accessibilityLabel="backspace"
        onPress={() => {
          keyPress("clear");
        }}
      >
        <Keyboard.Number>CE</Keyboard.Number>
      </Keyboard.Cell>
    );
  }

  function Row(numbersArray: Array<number>) {
    let cells = numbersArray.map((val) => Cell(val));
    return <Keyboard.Row style={[rowStyle]}>{cells}</Keyboard.Row>;
  }

  function Cell(symbol: any) {
    return (
      <Keyboard.Cell
        style={[cellStyle]}
        key={symbol}
        accessibilityLabel={symbol.toString()}
        onPress={() => {
          keyPress(symbol.toString());
        }}
      >
        <Keyboard.Number style={[{ color: color }]}>{symbol}</Keyboard.Number>
      </Keyboard.Cell>
    );
  }

  function keyPress(val: any) {
    if (pressMode === "string") {
      let curText = text;

      switch (val) {
        case "back":
          curText = curText.slice(0, -1);
          break;
        case "clear":
          curText = "";
          break;
        default:
          curText += val;
          break;
      }
      setText(curText);
      onPress(curText);
    } else {
      onPress(val);
    }
  }

  return (
    <Keyboard.Container style={[style]}>
      {Row([1, 2, 3])}
      {Row([4, 5, 6])}
      {Row([7, 8, 9])}
      <Keyboard.Row style={[rowStyle]}>
        {decimal ? Cell(".") : null}
        {Clear()}
        {Cell(0)}
        {Backspace()}
      </Keyboard.Row>
    </Keyboard.Container>
  );
};

VirtualKeyboard.defaultProps = {
  applyBackspaceTint: true,
  decimal: false,
  pressMode: "string",
  style: {},
  defaultValue: null,
};

export default VirtualKeyboard;
