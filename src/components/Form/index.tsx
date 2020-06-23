import styled from "styled-components/native";

export const Group = styled.View``;

export const GroupTouch = styled.TouchableOpacity``;

export const Label = styled.Text`
  /* padding: 0 ${({ theme }) => theme.sizes.spacing} ; */
   padding-top: ${({ theme }) => theme.sizes.spacing} ;
   padding-left: ${({ theme }) => theme.sizes.spacing} ;
   padding-right: ${({ theme }) => theme.sizes.spacing} ;
   padding-bottom: 0 ;
  font-size:  ${({ theme }) => theme.sizes.text.normal};
  font-weight: 700;
  color: ${({ theme }) => theme.form.label.color} ;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.form.input.borderColor};
  padding: 10px ${({ theme }) => theme.sizes.spacing};

  font-size: ${({ theme }) => theme.sizes.text.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.form.input.color};
`;

export const ViewInput = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.form.input.borderColor};
  padding: ${({ theme }) => theme.sizes.spacing};
  flex-direction: row;
  align-items: center;
`;
export const ViewTextInput = styled.Text`
  font-size: ${({ theme }) => theme.sizes.text.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.form.input.color};
`;

export const ViewInputIcon = styled.View`
  margin-right: 10px;
`;
