import styled from "styled-components/native";
import ThemeContract from '../../themes/@types'
export const Wrapper = styled.View`
 flex: 1;
`;
export const Main = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
 
`;


export const Container = styled.View`
  
  padding: ${({theme} : ThemeContract ) => theme.sizes.spacing};
  background: #fff;
  width: 300px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`


export const Buttom = styled.TouchableOpacity.attrs(()=>({
    activeOpacity: .8
}))`
padding: ${({theme} : ThemeContract ) => theme.sizes.spacing};
background: ${({theme} : ThemeContract ) => theme.primary};
margin-top: ${({theme} : ThemeContract ) => theme.sizes.text.extraBig};
border-radius: 5px;
`

export const ButtomLabel = styled.Text`
  color:  ${({theme} : ThemeContract ) => theme.white};
  font-size:  ${({theme} : ThemeContract ) => theme.sizes.text.large};
  font-weight: 700;
  text-align: center;

`
export const LinkContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Link = styled.TouchableOpacity.attrs(()=>({
    activeOpacity: .7
}))`
   align-self: center;
   margin-top: ${({theme} : ThemeContract ) => theme.sizes.spacing};
   
`
export const Label = styled.Text`
  color:  ${({theme} : ThemeContract ) => theme.primary};
  font-size:  ${({theme} : ThemeContract ) => theme.sizes.text.normal};
  font-weight: 600;
`

export const LabelRegister = styled.Text`
  color:  ${({theme} : ThemeContract ) => theme.secondary};
  font-size:  ${({theme} : ThemeContract ) => theme.sizes.text.normal};
  font-weight: 600;
  margin-left: ${({theme} : ThemeContract ) => theme.sizes.spacing};
`


export const LogoContainer = styled.View`
   margin-bottom: 16px;
   align-items: center;

`