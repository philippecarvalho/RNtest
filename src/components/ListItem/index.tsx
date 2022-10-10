import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RestaurantType} from '../../types';
import * as S from './styles';

type props = {
  item: RestaurantType;
};

export const ListItem: React.FC<props> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity onPress={() => navigation.push('Detail', {item})}>
      <S.BackgroundImage
        imageStyle={{borderRadius: 8, opacity: 1}}
        source={{uri: item.image}}>
        <S.DarkOverlay />
        <S.Title>{item.name}</S.Title>
      </S.BackgroundImage>
    </TouchableOpacity>
  );
};
