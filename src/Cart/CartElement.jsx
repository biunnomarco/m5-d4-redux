import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeAllSameCart, removeFromCart } from '../store/cartSlice';

const CartElement = ({title, src, price, asin, quantity, product}) => {

    const dispatch =useDispatch();

    return (
        <Card style={{width: '180px'}}>
        <Card.Img className='cart-img' variant="top" src={src} />
        <Card.Body>
          <Card.Title className='cart-title'>{title}</Card.Title>
          <Card.Title>{price}€</Card.Title>
          <div className='d-flex my-2 align-items-center gap-2'>
          <Button 
          variant='danger'  
          size="sm" 
          onClick={() =>dispatch(removeFromCart(asin))}
          > - </Button>
          <Card.Title>{quantity}</Card.Title>
          <Button 
          variant='success'  
          size="sm"
          onClick={() => dispatch(addToCart(product.obj))}
          > + </Button>
          </div>
          <Button variant="danger" onClick={() =>dispatch(removeAllSameCart(asin))}>Delete</Button>

        </Card.Body>
      </Card> 
    )
}

export default CartElement