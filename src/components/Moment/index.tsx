import React from "react";
import moment from "moment";
import { View, Text } from "react-native";

type MomentProps = {
  format?: string;
  date: string;
};

const Moment: React.FC<MomentProps> = ({ date, format }) => {

    console.log(date)
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
};

Moment.defaultProps = {
  format: "DD/MM/yyy",
};

export default Moment;
