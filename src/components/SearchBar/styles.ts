import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin: 20px 0 30px;
`;

export const SearchBar = styled.View`
  ${({theme}) => css`
    width: 315px;
    height: 50px;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    border-color: ${theme.colors.lightMedium};
    border-width: 1px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 10px;
  `}
`;

export const Input = styled.TextInput`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.regular};
    text-align: center;
    margin: 0 10px;
  `}
`;
