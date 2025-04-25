/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../routes/types';
import * as S from './styles';
import {useNetInfo} from '@react-native-community/netinfo';
import FastImage from 'react-native-fast-image';
import Offline from '../Offline';
import {ActivityIndicator, FlatList} from 'react-native';
import axios from 'axios';
import RenderItem from './renderItem';

export interface Product {
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

function Home() {
  const {isConnected} = useNetInfo();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchData();
  }, [isConnected]);

  return (
    <S.Container>
      {isConnected ? (
        <>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              contentContainerStyle={{paddingHorizontal: 16}}
              ListHeaderComponent={() => (
                <>
                  <S.ImageLogo
                    source={require('../../images/logo.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <S.HeaderTitle>Lista de itens</S.HeaderTitle>
                </>
              )}
              ListHeaderComponentStyle={{alignItems: 'center'}}
              onRefresh={fetchData}
              refreshing={loading}
              renderItem={({item}) => <RenderItem item={item} />}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          )}
        </>
      ) : (
        <Offline />
      )}
    </S.Container>
  );
}

export default Home;
