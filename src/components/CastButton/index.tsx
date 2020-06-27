import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ThemeContext } from "styled-components";
import { MaterialCommunityIcons as Icon, Entypo } from "@expo/vector-icons";
import { Button, Label, BubbleIcon } from "./styles";
import { CashContext } from "../CastModal/Context";

type ButtonProps = {
  onPress?: any;
  focused?: boolean;
};

const ButtonCast: React.FC<ButtonProps> = ({ onPress }) => {
  const theme = React.useContext(ThemeContext);
  const { handleToggleCash } = React.useContext(CashContext);
  return (
    <TouchableWithoutFeedback onPress={handleToggleCash}>
      <Button colors={theme.header.background}>
        <BubbleIcon>
          <Entypo color="#fff" size={15} name="plus" />
        </BubbleIcon>
        <Icon color="#fff" size={34} name="diamond-outline" />
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default ButtonCast;
