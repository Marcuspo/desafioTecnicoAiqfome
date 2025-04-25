import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Product} from '../screens/HomeProducts';

export type RootStackParamList = {
  Home: undefined;
  Details: Product;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
