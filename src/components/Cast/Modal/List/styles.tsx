import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  
  background: #fff;
`;
export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  height: ${({ theme }) => theme.header.categorie.list.height};
  width: 100%;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.primary};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
  color: ${({ theme }) => theme.header.color};
`;

export const ButtonBackClose = styled.TouchableOpacity`
 
  margin-right: ${({ theme }) => theme.sizes.spacing};
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;
export const ButtonSearchSearch = styled.TouchableOpacity`
  padding-right: ${({ theme }) => theme.sizes.spacing};
  margin-left: ${({ theme }) => theme.sizes.spacing};
`;
