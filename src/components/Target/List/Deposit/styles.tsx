import styled from "styled-components/native";
import ThemeContract from "../../../../themes/@types";

export const Wrapper = styled.View`
  width: 100%;

  flex: 1;
`;
export const Header = styled.View`
  height: 70px;
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  background: ${({ theme }: ThemeContract) => theme.gray};
  padding:0px ${({ theme }: ThemeContract) => theme.sizes.spacing};
  justify-content: center;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
 
`;
export const HeaderTitle = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.deposit.header.title.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.target.deposit.header.title.color};

`;
export const Main = styled.SafeAreaView`

  height: 400px;
  align-items: flex-end;
  background: #e7e7e7;
  margin:0px;
  padding-bottom: 16px;
`

export const MainContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    
  },
}))`
  flex: 1;
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
  margin: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  background: #f7f7f7;
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  border-radius: 3px;
  margin-bottom: 0px;
  
`;

export const Title = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.deposit.title.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.target.deposit.title.color};
  flex: 1;
  margin-right: ${({ theme }: ThemeContract) => theme.sizes.spacing};
`;

export const Date = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.deposit.label.size};
  color: ${({ theme }: ThemeContract) => theme.target.deposit.label.color};
`;

export const Value = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.deposit.value.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.target.deposit.value.color};
  text-align: right;
`;
