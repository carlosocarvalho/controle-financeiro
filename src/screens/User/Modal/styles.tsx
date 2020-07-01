import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import ThemeContract from "../../../themes/@types";

export const Wrapper = styled.View`
  margin-bottom: 2px;
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  
  background: #fff;
`;


export const MainContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
   
  },
}))`
  padding: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  width: 100%;

`;



export const HeaderContainer = styled.SafeAreaView`
  
  flex-direction: row;
  align-items: flex-start;
`;



export const Header = styled.View`
  height: ${({ theme }: ThemeContract | any) => theme.header.profile.height};
  background: #fbfbfb;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.text};
`;

export const Label = styled.Text`
  color: ${({ theme }: ThemeContract) => theme.text};
  font-size: 15px;
  margin-bottom: 16px;
  height: 30px;
  line-height: 30px;
`;



export const Strong = styled.Text`
 font-weight: bold;
 
`;


export const ButtonBackClose = styled.TouchableOpacity`
  margin-right: ${({ theme }: ThemeContract) => theme.sizes.spacing};
 
  align-items: center;
  justify-content: center;
  padding: ${({ theme }: ThemeContract | any) => theme.sizes.spacing};
`;


export const Actions =  styled.SafeAreaView`
  align-self: flex-end;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  
`

export const ActionsContainer = styled.View`
  padding: ${({ theme }: ThemeContract | any) => theme.sizes.spacing};


`

export const Row: any = styled.View`
  flex-direction: row;
  align-items:${({alignItems}: any) => !alignItems ? 'flex-start' : alignItems};
  justify-content:${({justifyContent}: any) => !justifyContent ? 'flex-start' : justifyContent};
`

export const Col = styled.View`
  width: 75px;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: ${({ theme }: ThemeContract | any) => theme.sizes.spacing};
`

export const Space = styled.View`
  width: ${({ theme }: ThemeContract | any) => theme.sizes.spacing};
 
`


export const AvatarContainer = styled.TouchableOpacity`

  background: rgba(100,100,100, 0.4);
  width: 120px;
  height: 120px;
  border-radius: 60px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
`;
