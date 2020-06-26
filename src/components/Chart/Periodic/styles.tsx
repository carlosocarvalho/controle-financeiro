import styled from "styled-components/native";

export const Title = styled.Text`
  flex: 1;
  background: ${({ theme }) => theme.gray};
  padding: ${({ theme }) => theme.sizes.spacing};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
`;

export const Container = styled.View`
  padding: ${({ theme }) => theme.sizes.spacing};
  background: #fff;
  
  border-bottom-color:#e7e7e7;
  border-bottom-width: 1px;
  padding-top:0px;

`;

export const Wrapper = styled.View``;
