import React from 'react';
import * as S from './styles';
import {SearchIcon} from '../Atoms/SearchIcon';
import {ArrowBack} from '../Atoms/ArrowBack';
import {TouchableOpacity} from 'react-native';

interface props {
  value: string;
  setValue: (input: string) => void;
}

export const SearchBar: React.FC<props> = ({value, setValue}) => {
  return (
    <S.Container>
      {value && (
        <S.SearchTermContainer>
          <TouchableOpacity onPress={() => setValue('')}>
            <ArrowBack fillColor={'#000'} />
          </TouchableOpacity>

          <S.SearchTermTextWrapper>
            <S.Title>Resultado para</S.Title>
            <S.SearchTerm>{value}</S.SearchTerm>
          </S.SearchTermTextWrapper>
        </S.SearchTermContainer>
      )}

      <S.SearchBar>
        <SearchIcon />
        <S.Input
          onChangeText={(newText: string) => setValue(newText)}
          value={value}
          placeholder={'Encontre um restaurante'}
          placeholderTextColor="#666666"
        />
      </S.SearchBar>
    </S.Container>
  );
};
