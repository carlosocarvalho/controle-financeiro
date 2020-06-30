import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View``;

export const Header = styled(LinearGradient)``;

export const HeaderContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  height: ${({ theme }) => theme.header.screen.resume.height};
`;

export const Container = styled.ScrollView.attrs({
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
})`
  height: 100%;
 
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.header.titleSize};
  color: ${({ theme }) => theme.header.color};
  font-weight: bold;
  padding-left: ${({ theme }) => theme.sizes.spacing};
  flex:1;
`;


export const ButtonAdd = styled.TouchableOpacity.attrs(()=>({
    activeOpacity: 0
}))`
padding:0px  ${({ theme }) => theme.sizes.spacing};

`