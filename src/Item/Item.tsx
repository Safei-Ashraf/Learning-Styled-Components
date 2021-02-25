import Button from '@material-ui/core/Button';
//Types:
import { ProductType } from '../App';
//Styles:
import { Wrapper } from './Item.styles';

type Props = {
    item: ProductType;
    handleAddToCart: (clickedProduct: ProductType) => void;
}
const Item = ({ item, handleAddToCart }: Props) => (<Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${ item.price}</h3>
    </div>
    <Button onClick={()=>handleAddToCart(item)}>
        Add to Cart
    </Button>
</Wrapper>);

export default Item;