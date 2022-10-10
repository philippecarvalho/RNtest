import {FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {ListItem} from '../ListItem';
import * as S from './styles';

export const RestaurantList = () => {
  const {data, isFetching} = useQuery(['data'], async () => {
    const res = await (
      await fetch(
        'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=1&limit=10',
      )
    ).json();
    return res;
  });

  return (
    <S.Container>
      <S.Title>Restaurantes</S.Title>

      {!isFetching && data && (
        <FlatList
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
          numColumns={2}
          data={data.data}
          renderItem={props => <ListItem {...props} />}
        />
      )}
    </S.Container>
  );
};
