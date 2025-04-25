import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../../routes/types';
import FastImage from 'react-native-fast-image';
import {CircleDollarSign, Heart, StarIcon} from 'lucide-react-native';
import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Product} from '..';

interface RenderItemProps {
  item: Product;
  onToggleFavorite?: () => void;
}

function RenderItem({item, onToggleFavorite}: RenderItemProps) {
  const navigation = useNavigation<NavigationProps>();
  const [isFavorite, setIsFavorite] = useState(false);

  const navigationToDetails = () => {
    navigation.navigate('Details', item);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkIfFavorite();
    });

    return unsubscribe;
  }, [item]);

  const checkIfFavorite = async () => {
    const storedFavorites = await AsyncStorage.getItem('favorites');
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const isFav = favorites.some((fav: Product) => fav.id === item.id);
    setIsFavorite(isFav);
  };

  useEffect(() => {
    checkIfFavorite();
  }, [item]);

  const toggleFavorite = async (item: Product) => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');

      let favorites: Product[] = [];

      try {
        favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (!Array.isArray(favorites)) {
          favorites = [];
        }
      } catch (e) {
        favorites = [];
      }

      const isAlreadyFavorite = favorites.some(fav => fav.id === item.id);

      let updatedFavorites;

      if (isAlreadyFavorite) {
        updatedFavorites = favorites.filter(fav => fav.id !== item.id);
      } else {
        updatedFavorites = [...favorites, item];
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return !isAlreadyFavorite;
    } catch (error) {
      console.error('Erro ao manipular favoritos:', error);
      return false;
    }
  };

  const handleToggleFavorite = async () => {
    const wasAdded = await toggleFavorite(item);
    setIsFavorite(wasAdded);
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  return (
    <S.Card onPress={navigationToDetails}>
      <S.ImageProduct
        source={{uri: item.image}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <S.ContainerBody>
        <S.CardTitle numberOfLines={1}>{item.title}</S.CardTitle>
        <S.Avaliations>
          <StarIcon size={12} color={'gold'} /> {item.rating.rate}
        </S.Avaliations>
        <S.CardPrice>
          <CircleDollarSign size={12} color={'green'} /> {item.price.toFixed(1)}
        </S.CardPrice>
      </S.ContainerBody>

      <S.ButtonFavorites onPress={handleToggleFavorite}>
        <Heart
          size={20}
          color={isFavorite ? 'red' : 'gray'}
          absoluteStrokeWidth={true}
          strokeWidth={1}
        />
      </S.ButtonFavorites>
    </S.Card>
  );
}

export default RenderItem;
