import React from 'react';
import {RestaurantType} from '../../types';
import * as S from './styles';

type props = {
  item: RestaurantType;
};

export const ListItem: React.FC<props> = ({item}) => {
  return (
    <S.BackgroundImage
      imageStyle={{borderRadius: 8, opacity: 1}}
      source={{uri: item.image}}>
      <S.DarkOverlay />
      <S.Title>{item.name}</S.Title>
    </S.BackgroundImage>
  );
};
