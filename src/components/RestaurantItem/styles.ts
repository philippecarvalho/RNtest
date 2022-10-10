import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.ScrollView`
  padding: 40px 20px 20px 20px;
  margin-top: -60px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: white;
  flex: 1;
`;

export const ArrowBackContainer = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-start;
  justify-content: center;
  margin-left: 30px;
`;

export const LogoContainer = styled.View`
  width: 120px;
  position: absolute;
  align-self: center;
  top: 80px;
  z-index: 99;
`;

export const Name = styled.Text`
  ${({theme}) => css`
    font-size: 20px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.bold};
    text-align: center;
  `}
`;

export const TextContainer = styled.View`
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    color: ${theme.colors.darkDown};
    font-family: ${theme.fonts.bold};
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.darkUp};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Divider = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.light};
    margin-bottom: 30px;
  `}
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 160px;
  justify-content: flex-end;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 200px;
`;

export const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
