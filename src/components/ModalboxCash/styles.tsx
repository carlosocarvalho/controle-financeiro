import styled from "styled-components/native";

export const Content = styled.View`
  min-height: 350px;
  width: 100%;
  background: #fff;
`;

export const Header = styled.View`
  padding: 25px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  padding:0 25px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const Label = styled.Text`
  color: ${({ theme }) => theme.light};
  margin-top: 2px;
`;

export const Icon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e7e7e7;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`

`;

export const BoxHeader = styled.View``;

export const BoxContent = styled.View`
  margin-top: 15px;
`;

export const BoxLabel = styled.Text`
  color: ${({ theme }) => theme.light};
  font-size: 14px;
`;

export const BoxTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
