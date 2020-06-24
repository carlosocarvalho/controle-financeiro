import styled from "styled-components/native";

export const CalendarBackdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
  width: 100%
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
