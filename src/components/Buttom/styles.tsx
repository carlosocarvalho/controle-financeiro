import styled from "styled-components/native";
import ThemeContract from "../../themes/@types";

interface PropButton {
  colorName: string;
}

export const Buttom: PropButton | any = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  background: ${({ theme, colorName }: any) =>
    theme.button[colorName]["background"]};

  
  width: ${({ theme, colorName }: any) => theme.button[colorName]["width"]};
  height: ${({ theme, colorName }: any) => theme.button[colorName]["height"]};
  border: ${({ theme, colorName }: any) => theme.button[colorName]["border"]};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Label: PropButton | any  = styled.Text`
    color: ${({ theme, colorName }: any) => theme.button[colorName]["color"]};
    font-size: ${({ theme, colorName }: any) => theme.button[colorName]["size"]};
    font-weight: 700;
`;
