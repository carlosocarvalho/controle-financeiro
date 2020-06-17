import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 16px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  background: #14c96b;
`;

export const AccountContainer = styled.View`
flex: 1;
`;
export const AccountLogo = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: #333;
  margin-right: 15px;
`;

export const AccountBalance = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #0c8e4b;
`;

export const AccountTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const AccountType = styled.Text`
  font-size: 12px;
  color: #888;
`;
export const AccountWrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background: #eee;
  margin-top: 10px;
`;
