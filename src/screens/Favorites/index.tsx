import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import RenderItem from '../HomeProducts/renderItem';
import * as S from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Favorites() {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      const parsed = jsonValue ? JSON.parse(jsonValue) : [];
      setProducts(parsed);
    } catch (e) {
      console.log('error', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation, products]);

  return (
    <S.Container>
      <S.HeaderTitle>Meus favoritos</S.HeaderTitle>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products}
          contentContainerStyle={{paddingHorizontal: 16}}
          ListHeaderComponentStyle={{alignItems: 'center'}}
          onRefresh={getData}
          refreshing={loading}
          renderItem={({item}) => (
            <RenderItem item={item} onToggleFavorite={getData} />
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </S.Container>
  );
}

export default Favorites;
