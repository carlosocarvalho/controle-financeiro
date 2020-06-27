import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spacing};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.sizes.spacing};
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.cast.item.title.size};
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;
export const Label = styled.Text`

font-weight: 600;
color: ${({ theme }) => theme.light};
`;

export const PriceContent = styled.View`
  align-items: flex-end;
`;
export const PriceLabel = styled.Text``;
export const Price = styled.Text`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.cast.item.title.size};
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const Head = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.cast.item.title.size};
  font-weight: bold;
  background: #f6f6f6;
  padding: ${({ theme }) => theme.sizes.spacing};
  color: ${({ theme }) => theme.secondary};
`;
