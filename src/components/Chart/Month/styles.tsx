import styled from "styled-components/native";

export const Title = styled.Text`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.spacing};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.sizes.text.large};
  font-weight: bold;
  text-align: center;

`;

export const Container = styled.View`
  background: #fff;
`;

export const ContainerChart = styled.View``;

export const Wrapper = styled.View`
  flex: 1;
  margin-bottom: 70px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.sizes.text.medium};
  font-weight: bold;
`;
