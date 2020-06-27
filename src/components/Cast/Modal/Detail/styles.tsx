import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: flex-end;
  flex: 1;
  background: transparent;
`;

export const Backdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
`;
export const Content = styled.View` 
   flex:1;
   
`