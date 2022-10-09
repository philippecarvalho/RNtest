import styled, {css} from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: 148px;
  height: 160px;
  border-radius: 8px;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 10px;
`;

export const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 12px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
  `}
`;
