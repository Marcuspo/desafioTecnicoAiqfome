/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {useNetInfo} from '@react-native-community/netinfo';
import FastImage from 'react-native-fast-image';
import Offline from '../Offline';
import {ActivityIndicator, FlatList} from 'react-native';
import axios from 'axios';
import RenderItem from './renderItem';
import Bootsplash from 'react-native-bootsplash';

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

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      Bootsplash.hide({fade: true});
    }
  };

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
                    source={require('../../assets/images/logo.png')}
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
