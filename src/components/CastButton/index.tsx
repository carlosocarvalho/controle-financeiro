import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon, Entypo} from "@expo/vector-icons";
import { Button, Label, BubbleIcon } from "./styles";

type ButtonProps = {
  onPress?: any;
  focused?: boolean;
};

const ButtonCast: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button colors={["#14c96b", "#05b55a"]}>
        
        <BubbleIcon>
          <Entypo color="#fff" size={15} name="plus" />
        </BubbleIcon>
        <Icon color="#fff" size={34} name="diamond-outline" />
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default ButtonCast;
