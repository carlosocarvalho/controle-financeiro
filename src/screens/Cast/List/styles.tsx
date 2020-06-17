import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";



export const Wrapper = styled.ScrollView`

`

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled(LinearGradient)`
  height: 80px;
 
`;


export const Search = styled.TextInput`

   border-radius: 8px;
   height: 40px;
   width: 200px;
   border: 1px solid #fff;

`