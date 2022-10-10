import React from 'react';
import * as S from './styles';
import {SearchIcon} from '../Atoms/SearchIcon';

interface props {
  value: string;
  setValue: (input: string) => void;
}

export const SearchBar: React.FC<props> = ({value, setValue}) => {
  return (
    <S.Container>
      <S.SearchBar>
        <SearchIcon />
        <S.Input
          onChangeText={(newText: string) => setValue(newText)}
          value={value}
          placeholder={'Encontre um restaurante'}
        />
      </S.SearchBar>
    </S.Container>
  );
};
