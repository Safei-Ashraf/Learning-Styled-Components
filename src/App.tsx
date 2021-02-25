//Hooks
import { useState } from 'react';
import { useQuery } from 'react-query';
//Components:
import Item from './Item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//Styles
import { Wrapper } from './App.styles';
import { red } from '@material-ui/core/colors';
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
  const getTotalItems = () => null;
  const handleAddToCart = ( clickedProduct : ProductType) => null;
  const handleRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div> <p>Something Went Wrong...</p></div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(product => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Item item={product} handleAddToCart={ handleAddToCart}/>
        </Grid>) )}
      </Grid>
    </Wrapper>
  );
}

export default App;
