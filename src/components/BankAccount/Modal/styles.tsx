import styled from "styled-components/native";

export const Backdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
  width: 100%;
`;
export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 75px;
  width: 100%;
`;
export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const Content = styled.View`
  height: 360px;

  background: #fff;
  width: 100%;
`;

export const ButtonModalClose = styled.TouchableOpacity``;

export const ButtonCloseKeyBoard = styled.TouchableOpacity`
  border-radius: 2px;
  height: 5px;
  width: 80px;
  background: #ccc;
  margin-top: 20px;
`;

export const ButtonBackClose = styled.TouchableOpacity`
  padding-left: ${({ theme }) => theme.sizes.spacing};
  margin-right: ${({ theme }) => theme.sizes.spacing};
`;
export const ButtonSearchSearch = styled.TouchableOpacity`
  padding-right: ${({ theme }) => theme.sizes.spacing};
  margin-left: ${({ theme }) => theme.sizes.spacing};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.bankAccount.modal.title.size};
  margin-top: ${({ theme }) => theme.sizes.spacing};
  font-weight: bold;
  color: ${({ theme }) => theme.bankAccount.modal.title.color};
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.bankAccount.modal.item.padding};
  border-bottom-color: ${({ theme }) =>
    theme.bankAccount.modal.item.borderColor};
  border-bottom-width: 1px;
`;
export const ItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.bankAccount.modal.item.title.size};
  color: ${({ theme }) => theme.bankAccount.modal.item.title.color};
`;

export const ItemLabel = styled.Text`
  font-size: ${({ theme }) => theme.bankAccount.modal.item.label.size};
  color: ${({ theme }) => theme.bankAccount.modal.item.label.color};
`;

export const ItemDescription = styled.View`
   flex: 1;
`;
export const ItemIcon = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.bankAccount.modal.item.padding};
  background: ${({ theme }) => theme.bankAccount.modal.item.icon.background};
`;

export const ItemBalance = styled.View`
  
  align-items: flex-end;
`

export const ItemBalanceTitle = styled.Text`
  font-size: ${({ theme }) => theme.bankAccount.modal.item.label.size};
  color: ${({ theme }) => theme.bankAccount.modal.item.label.color};

`;

export const ItemBalanceValue = styled.Text`
font-size: ${({ theme }) => theme.bankAccount.modal.item.title.size};
color: ${({ theme }) => theme.bankAccount.modal.item.title.color};
font-weight: bold;
`;
