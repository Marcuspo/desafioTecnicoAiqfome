import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/types';
import FastImage from 'react-native-fast-image';

import * as S from './styles';
import {ArrowLeftIcon, Star} from 'lucide-react-native';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

function Details() {
  const {params: item} = useRoute<DetailsRouteProp>();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={'black'} />
        </TouchableOpacity>
        <S.HeaderTitle>Detalhes do Produto</S.HeaderTitle>
        <View style={{width: 24}} />
      </S.HeaderContainer>
      <S.ConatinerBody>
        <FastImage
          source={{uri: item.image}}
          style={{width: '100%', height: 200}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <S.TextTitle>{item.title}</S.TextTitle>
        <S.ContainerCategoryAndRate>
          <S.CategoryView>
            <S.CategoryAndRate>{item.category}</S.CategoryAndRate>
          </S.CategoryView>
          <S.CategoryAndRate>
            <Star size={12} color={'yellow'} /> {item.rating.rate}
          </S.CategoryAndRate>
        </S.ContainerCategoryAndRate>
        <S.TextPrice>R$ {item.price}</S.TextPrice>

        <S.TextDescription>{item.description}</S.TextDescription>
      </S.ConatinerBody>
    </S.Container>
  );
}

export default Details;
