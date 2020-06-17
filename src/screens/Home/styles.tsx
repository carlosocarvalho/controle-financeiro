import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.ScrollView``;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 200px;
  background: #14c96b;
`;
export const Balance = styled.Text`
  font-size: 28px;
  font-weight: 200;
  color: #fff;
`;

export const BalanceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding:0 16px;
  
`;

export const BalanceContainer = styled.View`
  align-items: center;
  flex:25;

`;

export const BalanceTitle = styled.Text`
 font-weight: bold;
 color: #fff;
 
`;
export const Bold = styled.Text`
  font-size: 35px;
  font-weight: bold;
 
`;

export const UserContainer = styled.View`
 align-items: flex-end;
 padding: 0px 16px;
 padding-top: 16px;
`;

export const AvatarContainer = styled.TouchableOpacity`

  background: rgba(255,255,255, 0.4);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  padding: 1px;
  align-items: center;
  justify-content: center;
`
export const Avatar = styled.Image`
  width: 50px;
`;

export const EyeIcon = styled.TouchableOpacity`
  flex:3;
`
