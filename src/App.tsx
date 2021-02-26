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
import Cart from './Cart/Cart';
//Styles
import { Wrapper,StyledButton } from './App.styles';
import './index.css';
//Types:
export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;

}
//API Call:
const getProducts = async (): Promise<ProductType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]as ProductType[])
  const { data, isLoading, error } = useQuery<ProductType[]>('products', getProducts);

  console.log(data);

  const getTotalItems = (items: ProductType[]) => (
    items.reduce((acc: number, item) => acc + item.amount, 0));

  const handleAddToCart = (clickedProduct: ProductType) => (null);

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div> <p>Something Went Wrong...</p></div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={()=>setIsCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={ handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)}  color="error">
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Item item={product} handleAddToCart={ handleAddToCart}/>
        </Grid>) )}
      </Grid>
    </Wrapper>
  );
}

export default App;
