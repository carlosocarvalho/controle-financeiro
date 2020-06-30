import styled from "styled-components/native";
import ThemeContract from "../../../themes/@types";

export const Wrapper = styled.View`
  width: 100%;

  flex: 1;
`;
export const Header = styled.View`
  height: 70px;
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  background: ${({ theme }: ThemeContract) => theme.gray};
  padding: 0px ${({ theme }: ThemeContract) => theme.sizes.spacing};
  justify-content: center;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const HeaderTitle = styled.Text`
  font-size: ${({ theme }: ThemeContract) =>
    theme.target.deposit.header.title.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) =>
    theme.target.deposit.header.title.color};
`;
export const Main = styled.SafeAreaView`
  height: 200px;
  align-items: flex-end;
  background: #fff;
`;

export const MainContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {},
}))`
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  width: 100%;
`;

export const Backdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 5;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  background: #fff;
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  border-radius: 3px;
`;

export const ActionsContainer = styled.SafeAreaView`
  width: 100%;
`
export const Actions = styled.View`
  align-items: center;
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  flex-direction: row;
  justify-content: center;
`;

export const ButtonSave = styled.TouchableOpacity`
  background-color: ${({ theme }: ThemeContract) => theme.secondary};
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  margin-right: ${({ theme }: ThemeContract) => theme.sizes.spacing};
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${({ theme }: ThemeContract) => theme.danger};
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
`;
