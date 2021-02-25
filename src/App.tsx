//Hooks
import { useState } from 'react';
import { useQuery } from 'react-query';
//Components:
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//Styles
import { Wrapper } from './App.styles';
//Types:
export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
//API Call:
const getProducts = async (): Promise<ProductType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}
const App = () => {
  const { data, isLoading, error } = useQuery<ProductType[]>('products', getProducts);
  console.log(data);
  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
