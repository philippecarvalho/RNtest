import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

const window = Dimensions.get('window');
const ratio = window.width / 375;

export const BackgroundImage = styled.ImageBackground`
  width: ${window.width}px;
  height: ${274 * ratio}px;
  padding: 40px 40px 60px 40px;
`;

export const H2 = styled.Text`
  ${({theme}) => css`
    font-size: 24px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.bold};
    margin-bottom: 20px;
  `}
`;

export const Lead = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.regular};
  `}
`;
