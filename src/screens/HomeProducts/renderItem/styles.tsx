import styled from '@emotion/native';
import FastImage from 'react-native-fast-image';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';

export const Card = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  border-radius: 10px;
  margin: ${`${moderateScale(5)}px`};
  background-color: #fff;
  padding-vertical: ${`${verticalScale(12)}px`};
  padding-horizontal: ${`${horizontalScale(8)}px`};
  gap: ${`${moderateScale(8)}px`};
`;

export const ImageProduct = styled(FastImage)`
  justify-content: center;
  align-items: center;
  width: ${`${horizontalScale(50)}px`};
  height: ${`${verticalScale(50)}px`};
  border: 0.1px solid #000;
  border-radius: ${`${moderateScale(50)}px`};
  margin-bottom: ${`${verticalScale(8)}px`};
`;

export const ContainerBody = styled.View`
  flex: 1;
  margin-left: ${`${horizontalScale(8)}px`};
  gap: ${`${moderateScale(5)}px`};
`;

export const CardTitle = styled.Text`
  font-size: ${moderateScale(16)}px;
  font-weight: bold;
  margin-right: ${`${horizontalScale(20)}px`};
`;

export const CardPrice = styled.Text`
  font-size: ${moderateScale(14)}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${`${verticalScale(5)}px`};
  color: #000;
`;

export const Avaliations = styled.Text`
  font-size: ${moderateScale(12)}px;
  color: #000;
`;

export const ButtonFavorites = styled.TouchableOpacity``;
