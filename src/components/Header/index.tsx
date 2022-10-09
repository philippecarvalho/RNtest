import {View} from 'react-native';
import React from 'react';
import * as S from './styles';
const image = require('./images/header-img.png');

export const Header = () => {
  return (
    <View>
      <S.BackgroundImage source={image} resizeMode="contain">
        <S.H2>Descubra novos sabores</S.H2>
        <S.Lead>Aqui eu converso com você sobre nossa proposta</S.Lead>
      </S.BackgroundImage>
    </View>
  );
};
