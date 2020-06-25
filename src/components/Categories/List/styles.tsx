import styled from "styled-components/native";

export const CategorieContainer = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.sizes.spacing};
  background: #fff;
`;
export const CategorieContent = styled.ScrollView`
  flex: 1;
 
`;

export const CategorieHeader = styled.View`
  height: ${({theme}) => theme.plaform == 'ios' ?  '100' : '55'}px;
  width: 100%;
`;

export const CategorieHeaderContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.primary};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategorieHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
  color: ${({ theme }) => theme.header.color};
`;

export const ButtonBackClose = styled.TouchableOpacity`
  padding-left: ${({ theme }) => theme.sizes.spacing};
  margin-right: ${({ theme }) => theme.sizes.spacing};
`;
export const ButtonSearchSearch = styled.TouchableOpacity`
  padding-right: ${({ theme }) => theme.sizes.spacing};
  margin-left: ${({ theme }) => theme.sizes.spacing};
`;