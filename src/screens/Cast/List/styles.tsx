import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.ScrollView`
  margin-bottom: 2px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const Header = styled(LinearGradient)`
  height: ${({ theme }) => theme.header.cast.componentList};
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.header.color};
  align-items: center;
  padding-left: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export const Search = styled.TextInput`
  border-radius: 8px;
  height: 40px;
  width: 200px;
  border: 1px solid #fff;
`;

export const Date = styled.Text`
  padding: 15px 16px;
  font-weight: bold;
  background: #e7e7e7;
  color: ${({ theme }) => theme.primary};
`;
export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;

  justify-content: space-between;
  padding: 10px 16px;
  background: ${({ odd, theme }) => (odd ? theme.primary900 : "#fff")};
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
export const ItemAccount = styled.Text``;
export const Value = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const Label = styled.Text`
  color: ${({ theme }) => theme.light};
  margin-top: 2px;
`;

export const Box = styled.View`
  flex: 1;
  margin-left: 16px;
`;
export const BoxValue = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Actions = styled.View`
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`;
export const ActionIcon = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const ContainerTotal = styled.View`
  height: 60px;
  background: #fff;
  position: relative;
  bottom: 0px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 16px;
`;

export const Small = styled.Text`
  font-size: 12px;
  margin-right: 25px;
`;

export const ModalInnner = styled.View`
  justify-content: flex-end;
  flex: 1;
  background: transparent;
`;

export const ModalBackdrop =  styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 1,

  }))`
  flex: 1;

  `

