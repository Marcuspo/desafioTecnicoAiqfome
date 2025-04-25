import styled from '@emotion/native';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export const Container = styled.View`
  flex: 1;
  margin-top: ${`${verticalScale(60)}px`};
`;

export const HeaderTitle = styled.Text`
  padding-horizontal: ${`${horizontalScale(16)}px`};
  font-size: ${`${verticalScale(24)}px`};
  font-weight: bold;
  margin: ${`${verticalScale(8)}px`};
`;
