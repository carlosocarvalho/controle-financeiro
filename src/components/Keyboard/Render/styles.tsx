import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
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

export const ButtonModalClose = styled.TouchableOpacity``;

export const Backdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  width: 100%;
  height: ${({ theme }) => theme.keyboard.backdrop.height};
`;

export const Content = styled.View`
  background-color: #fff;
  width: 100%;
  align-items: center;
  flex: 1;
 
`;

export const ButtonCloseKeyBoard = styled.TouchableOpacity`
  border-radius: 2px;
  height: 5px;
  width: 80px;
  background: #ccc;
  margin-top: 20px;
`;

export const DocumentUpContainer = styled.TouchableOpacity`
  border: 1px dotted #ccc;
  border-radius: 5px;
  height: 60px;
  width: 200px;
  background: #e7e7e7;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.sizes.spacing};
  margin-bottom: ${({ theme }) => theme.sizes.spacing};
`;



export const ActionsContainer = styled.SafeAreaView`
    align-items: center;
    padding: ${({ theme }) => theme.sizes.spacing};
    justify-content: flex-end;
    flex: 1;
  
`


export const ButtonSave = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.text};
    height: 46px;
    width: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    
    
`