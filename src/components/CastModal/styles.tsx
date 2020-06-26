import styled from "styled-components/native";
import { Dimensions } from "react-native";
export const Container = styled.ScrollView``;

type StyledProps = {
  props: any;
};

export const Header = styled.View`
  height: ${({ theme }) => theme.header.cast.height};
  background: ${({ theme }) => theme.primary};
`;

export const HeaderContent = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
`;

export const CalendarContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Visor = styled.View`
  padding-bottom: 16px;
  padding-right: 16px;
  flex: 1;
  align-items: flex-end;
  align-self: flex-end;
`;
export const VisorText = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonModalClose = styled.TouchableOpacity``;

export const KeyboardBackdrop = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  width: 100%;
  flex: 1;
`;

export const KeyboardContent: React.FC<StyledProps | any> = styled.View`
  background-color: #fff;
  width: 100%;
  align-items: center;
  height: ${({ screenHeight }) => screenHeight}px;
`;

export const ButtonCloseKeyBoard = styled.TouchableOpacity`
  border-radius: 2px;
  height: 5px;
  width: 80px;
  background: #ccc;
  margin-top: 20px;
`;

export const DocumentUpContainer = styled.TouchableOpacity`
  border: 1px dotted #ccc;
  border-radius: 5px;
  height: 60px;
  width: 200px;
  background: #e7e7e7;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.sizes.spacing};
  margin-bottom: ${({ theme }) => theme.sizes.spacing};
`;

export const DocumentUpText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.form.label.color};
`;

export const DocumentDownContainer = styled.View`
  flex-direction: row;
  border: 1px dotted #ccc;
  border-radius: 5px;
  height: 60px;
  width: 95%;
  background-color: ${({ theme }) => theme.secondary};
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.sizes.spacing};
  margin-left: ${({ theme }) => theme.sizes.spacing};
  margin-right: ${({ theme }) => theme.sizes.spacing};

  padding-left: ${({ theme }) => theme.sizes.spacing};
  padding-right: ${({ theme }) => theme.sizes.spacing};
  margin-bottom: ${({ theme }) => theme.sizes.spacing};
`;

export const DocumentDownText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const DocumentDownIcon = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  margin-left: ${({ theme }) => theme.sizes.spacing};
`;

export const ButtonSave = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.secondary};
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  margin-right: ${({ theme }) => theme.sizes.spacing};
`;

export const ActionsContainer = styled.SafeAreaView`
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spacing};
  flex-direction: row;
  justify-content: center;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.danger};
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
`;

export const VisorTouch = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  /* border: 1px solid #fff; */
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OptionType = styled.TouchableOpacity.attrs(() =>({
  activeOpacity: .7
}))`
  padding: ${({ theme }) => theme.sizes.spacing};
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
`;
export const OptionLabel = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const OptionActive = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${({  backgroundColor }) => backgroundColor};
  margin-right: 10px;
`;
