import { StyleSheet, Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
// const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  align-items: flex-start;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const WhiteSpace = styled.View`
  flex: 1;
`;

export const Cell = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const Number = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const Backspace = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    marginTop: 15,
  },
  number: {
    fontSize: 25,
    textAlign: "center",
  },
  backspace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
});
