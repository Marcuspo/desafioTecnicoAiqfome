import styled from '@emotion/native';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
  margin-top: ${`${verticalScale(60)}px`};
`;

export const ImageLogo = styled(FastImage)`
  justify-content: center;
  align-items: center;
  width: ${`${horizontalScale(50)}px`};
  height: ${`${verticalScale(50)}px`};
`;

export const HeaderTitle = styled.Text`
  font-size: ${`${verticalScale(24)}px`};
  font-weight: bold;
  margin: ${`${verticalScale(8)}px`};
`;
