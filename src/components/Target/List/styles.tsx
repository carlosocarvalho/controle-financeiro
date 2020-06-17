import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: #14c96b;
`;

export const TargetContainer = styled.View``;

export const TargetInfoContainer = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`;
export const TargetBarContainer = styled.View`
  height: 10px;
  background: #ddd;
  margin-top:5px;
  border-radius: 2px;
`;


export const TargetBar = styled.View`
  height: 10px;
  background: #178bd8;
  border-radius: 2px;
  width: ${({width}) => width && width > 0 ? width + '%': 0 }
`;
export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;
export const Value = styled.Text`
  font-size: 12px;

  color: #444;
`;
export const TargetWrapper = styled.View`
margin-top: 15px;
`;
