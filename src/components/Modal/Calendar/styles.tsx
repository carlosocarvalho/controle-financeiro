import styled from "styled-components/native";

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
  height: 350px;
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
