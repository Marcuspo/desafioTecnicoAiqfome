import styled from '@emotion/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${`${verticalScale(60)}px`};
  padding-horizontal: ${`${horizontalScale(16)}px`};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${`${verticalScale(24)}px`};
  font-weight: bold;
  margin: ${`${verticalScale(8)}px`};
`;

export const ConatinerBody = styled.View`
  flex: 1;
`;

export const ContainerCategoryAndRate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryView = styled.View`
  background-color: #f5f5f5;
  padding: ${`${verticalScale(12)}px`};
  border-radius: ${`${moderateScale(50)}px`};
`;

export const TextTitle = styled.Text`
  font-size: ${`${verticalScale(20)}px`};
  font-weight: bold;
  margin-vertical: ${`${verticalScale(8)}px`};
`;

export const CategoryAndRate = styled.Text`
  font-size: ${`${verticalScale(13)}px`};
  color: #000;
`;

export const TextPrice = styled.Text`
  font-size: ${`${verticalScale(16)}px`};
  font-weight: 500;
  margin-vertical: ${`${verticalScale(8)}px`};
`;

export const TextDescription = styled.Text`
  font-size: ${`${verticalScale(16)}px`};
  font-weight: 300;
`;
