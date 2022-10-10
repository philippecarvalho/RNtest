import {Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import * as S from './styles';
import {Spinner} from '../Atoms/Spinner';

export const Loading = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;
  const interpolateRotation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  const runAnimation = () => {
    rotationValue.setValue(1);
    Animated.timing(rotationValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => runAnimation());
  };

  useEffect(() => {
    runAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.LoadingContainer>
      <S.Text>Carregando</S.Text>
      <Animated.View
        style={{
          transform: [{rotate: interpolateRotation}],
        }}>
        <Spinner />
      </Animated.View>
    </S.LoadingContainer>
  );
};
