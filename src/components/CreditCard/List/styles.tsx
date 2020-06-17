import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 16px;
  margin-top: 20px;
 
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #0c8e4b;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: #14c96b;
`;

export const CreditCardContainer = styled.View`
  flex: 1;
`;
export const CreditCardLogo = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: #22756C;
  margin-right: 15px;
`;

export const CreditCardBalance = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #0c8e4b;
`;

export const CreditCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const CreditCardType = styled.Text`
  font-size: 12px;
  color: #888;
  font-weight: bold;
`;
export const CreditCardWrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  align-items: flex-start;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background: #eee;
  margin-top: 10px;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex: 1;
`;
export const BalanceLimitContainer = styled.View``;
export const Label = styled.Text`
  font-size: 12px;
  color: #888;
  font-weight: bold;
`;
export const Value = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-top: 5px;
`;
