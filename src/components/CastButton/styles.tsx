
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Button = styled(LinearGradient)`
  width: 60px;
  height:60px;
  border-radius:30px;
  align-items: center;
  justify-content: center;
`;


export const Label = styled.Text`
 color: #fff;
 font-size: 12px;
`

export const BubbleIcon = styled.View`
  position: absolute;
  top: 18px;
`