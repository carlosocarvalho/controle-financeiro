import React from "react";
import { Platform } from "react-native";

import Svg from "react-native-svg";
import { TouchableOpacity } from "react-native";

const ChartContainer: React.FC = ({ children }) => {
  const [options, setOptions] = React.useState<object>({})
  const Element = Platform.OS === "ios" ? TouchableOpacity : Svg;
  React.useEffect(() => {
      if( Platform.OS === "ios") 
          setOptions({
            activeOpacity: 1
          })
  }, [])
  
  return <Element {...options}>{children}</Element>;
};

export default ChartContainer;
