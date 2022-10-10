import styled, {css} from 'styled-components/native';

export const Text = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    color: ${theme.colors.darkUp};
    font-family: ${theme.fonts.regular};
    margin-right: 5px;
  `}
`;

export const LoadingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
