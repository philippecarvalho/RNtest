import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import * as S from './styles';
import {RestaurantType} from '../../types';
import {ArrowBack} from '../Atoms/ArrowBack';

type RootStackParamList = {
  Detail: {item: RestaurantType};
};

type ScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export const RestaurantItem = () => {
  const route: ScreenRouteProp = useRoute();
  const item = route?.params?.item;
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.BackgroundImage source={{uri: item.image}}>
        <S.DarkOverlay />
        <S.ArrowBackContainer onPress={() => navigation.goBack()}>
          <ArrowBack style={{marginTop: -30}} />
        </S.ArrowBackContainer>
      </S.BackgroundImage>

      <S.LogoContainer>
        <S.Logo source={{uri: item.logo}} />
      </S.LogoContainer>

      <S.Scroll>
        <S.Content>
          <S.Name>{item.name}</S.Name>

          <S.TextContainer>
            <S.Title>Descrição</S.Title>
            <S.Text>{item.description}</S.Text>
          </S.TextContainer>

          <S.TextContainer>
            <S.Title>Contato</S.Title>
            <S.Text>{item.telephone}</S.Text>
            <S.Text>{item.website}</S.Text>
          </S.TextContainer>

          <S.TextContainer>
            <S.Title>Faixa de preço</S.Title>
            <S.Text>{item.price_range}</S.Text>
          </S.TextContainer>

          <S.Divider />

          <S.TextContainer>
            <S.Title>Horários de Funcionamento</S.Title>
            <S.Text>{item.opening_hours}</S.Text>
          </S.TextContainer>

          <S.TextContainer>
            <S.Title>Formas de pagamento</S.Title>
            <S.Text>{item.payment_methods}</S.Text>
          </S.TextContainer>
        </S.Content>
      </S.Scroll>
    </S.Container>
  );
};
