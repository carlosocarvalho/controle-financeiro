import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  scrollEventThrottle: 200,
}))`
  margin-left: 16px;
  margin-top: 20px;
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-right: 16px;
  border: 1px solid #eee;
`;

export const CardContainer = styled.View`
  flex: 1;
`;

export const CardIcon = styled.View`
  background: #d62035;
  height: 45px;
  width: 45px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const CardHeader = styled.View`
 flex-direction: row;
 align-items: center;
`;

export const CardDescription = styled.Text`
  font-size: 17px;
  margin-top: 20px;
  color: #777;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background: ${({ primary }) => (primary ? "#14c96b" : "#fff")};
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ primary }) => (primary ? "#fff" : "#14c96b")};
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ primary }) => (primary ? "#fff" : "#14c96b")};
`;
