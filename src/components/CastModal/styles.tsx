import styled from "styled-components/native";
import { Dimensions } from "react-native";
export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 150px;
  background: ${({ theme }) => theme.primary};
`;

export const HeaderContent = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  flex-direction: row;
`;

export const CalendarBackdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;

  width: 100%;
`;
export const CalendarContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const CalendarContent = styled.View`
  height: 360px;
  align-items: center;
  
`;

export const Visor = styled.View`
  padding-bottom: 16px;
  padding-right: 16px;
`;
export const VisorText = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: #fff;
`;

export const CategorieContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  background: #fff;
`;
export const CategorieContent = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const CategorieHeader = styled.View`
  height: ${({theme}) => theme.plaform == 'ios' ?  '100' : '55'}px;
  width: 100%;
`;

export const CategorieHeaderContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.primary};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategorieHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
  color: ${({ theme }) => theme.header.color};
`;

export const ButtonModalClose = styled.TouchableOpacity``;

export const KeyboardBackdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  width: 100%;
  flex: 1;
`;

export const KeyboardContent = styled.View`
  background-color: #fff;
  width: 100%;
  align-items: center;
  height: ${({ screenHeight }) => screenHeight}px;
`;

export const ButtonCloseKeyBoard = styled.TouchableOpacity`
  border-radius: 2px;
  height: 5px;
  width: 80px;
  background: #ccc;
  margin-top: 20px;
`;

export const ButtonBackClose = styled.TouchableOpacity`
  padding-left: ${({ theme }) => theme.sizes.spacing};
  margin-right: ${({ theme }) => theme.sizes.spacing};
`;
export const ButtonSearchSearch = styled.TouchableOpacity`
  padding-right: ${({ theme }) => theme.sizes.spacing};
  margin-left: ${({ theme }) => theme.sizes.spacing};
`;
