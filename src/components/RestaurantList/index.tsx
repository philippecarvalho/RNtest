import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ListItem} from '../ListItem';
import * as S from './styles';
import {SearchBar} from '../SearchBar';
import {useDebounce} from '../../hooks/useDebounce';
import {Loading} from '../Loading';
import {RestaurantType} from '../../types';

interface props {
  hideHeader: () => void;
}

export const RestaurantList: React.FC<props> = ({hideHeader}) => {
  const [value, setValue] = useState('');
  const debouncedFilter = useDebounce(value, 500);

  const {data, isFetching} = useQuery(['data'], async () => {
    const res = await (
      await fetch(
        'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=1&limit=10',
      )
    ).json();
    return res;
  });

  const fetchProducts = async (filter: string) => {
    const res = await (
      await fetch(
        `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=1&limit=10&search=${filter}`,
      )
    ).json();
    return res;
  };

  const {data: query} = useQuery(
    ['query', debouncedFilter],
    async () => fetchProducts(debouncedFilter),
    {enabled: Boolean(debouncedFilter)},
  );

  useEffect(() => {
    if (value) {
      hideHeader();
    }
  }, [hideHeader, value]);

  return (
    <S.Container>
      <SearchBar value={value} setValue={setValue} />
      <S.Title>Restaurantes</S.Title>

      {isFetching && <Loading />}

      {!isFetching && data && (
        <S.ItemsWrapper>
          {query ? (
            <>
              {query.data.map((item: RestaurantType) => (
                <ListItem key={item.id} item={item} />
              ))}
            </>
          ) : (
            <>
              {data.data.map((item: RestaurantType) => (
                <ListItem key={item.id} item={item} />
              ))}
            </>
          )}
        </S.ItemsWrapper>
      )}
    </S.Container>
  );
};
