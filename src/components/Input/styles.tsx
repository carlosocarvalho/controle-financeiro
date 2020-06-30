import styled from "styled-components/native";
import ThemeContract from "../../themes/@types";

export const Group = styled.View``;

export const GroupTouch = styled.TouchableOpacity``;

export const Label = styled.Text`
  padding-top: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  padding-left: ${({ theme }: ThemeContract) => theme.sizes.spacing};
  padding-right: ${({ theme }: ThemeContract) => theme.sizes.spacing};

  font-size: ${({ theme }: ThemeContract) => theme.sizes.text.normal};
  font-weight: 700;
  color: ${({ theme }: any) => theme.form.label.color};
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: any) => theme.form.input.borderColor};
  padding: ${({ theme }: any) => theme.form.input.paddingVertical}
    ${({ theme }: ThemeContract) => theme.sizes.spacing};

  font-size: ${({ theme }: ThemeContract) => theme.sizes.text.medium};
  font-weight: 700;
  color: ${({ theme }: ThemeContract) => theme.form.input.color};
  height: 40px;
`

export const ViewInput = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: any) => theme.form.input.borderColor};
  padding: 5px ${({ theme }: ThemeContract) => theme.sizes.spacing};
  flex-direction: row;
  align-items: center;
`;
export const ViewTextInput = styled.Text`
  font-size: ${({ theme }: ThemeContract) => theme.sizes.text.medium};
  font-weight: 700;
  color: ${({ theme }: any) => theme.form.input.color};
`;

export const ViewInputIcon = styled.View`
  margin-right: 10px;
`;
