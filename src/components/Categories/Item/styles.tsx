import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: ${({ theme }) => theme.sizes.spacing};
  padding-right: ${({ theme }) => theme.sizes.spacing};
  height: 60px;
  
`;
export const IconContainer = styled.View`
   margin-right: ${({ theme }) => theme.sizes.spacing};
   height: 40px;
   width: 40px;
   border-radius:20px;
   background-color: ${({ theme }) => theme.primary900};
   align-items: center;
   justify-content: center;
   
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;