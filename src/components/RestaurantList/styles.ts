import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    padding: 20px;
    margin-top: -40px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    background-color: ${theme.colors.white};
    flex: 1;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.bold};
    margin-bottom: 15px;
  `}
`;
