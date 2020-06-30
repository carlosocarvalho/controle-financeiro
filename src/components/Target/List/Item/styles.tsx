import styled from "styled-components/native";
import ThemeContract from "../../../../themes/@types";

export const Container = styled.TouchableOpacity.attrs(()=>({
  activeOpacity: .8
}))`
  margin-bottom: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  
`;
export const Title = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.item.title.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.target.item.title.color};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 5px;
  background: ${({ theme }: ThemeContract) => theme.gray};
`;
export const DepositLine = styled.View`
  
  width: 100%;
  margin-bottom: 10px;
  margin-top: 16px;
  border-top-color: ${({ theme }: ThemeContract) => theme.gray};
  border-top-width: 1px;


`;
export const Value = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.target.item.value.size};
  font-weight: bold;
  color: ${({ theme }: ThemeContract) => theme.target.item.value.color};
`;

export const DepositContainer = styled.View``;
export const DepositHeader = styled.View``;
// export const DepositButton = styled.View`

// `

export const Label = styled.Text`
  color: ${({ theme }: ThemeContract) => theme.target.item.label.color};
  font-size: ${({ theme }: ThemeContract) => theme.target.item.label.size};
`;

export const ProgressContainer = styled.View`
  height: 8px;
  width: 100%;
  background: #e7e7e7;
  margin-top: 10px;
  border-radius: 2px;
`;

export const ProgressBarValue = styled.View`
  height: 100%;
  border-radius: 2px;
  background: ${({ theme }: any) => theme.target.item.percentual.background};
`;
