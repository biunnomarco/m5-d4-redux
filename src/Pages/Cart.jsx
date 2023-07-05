import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../store/cartSlice'
import NavBar from '../NavBar/NavBar'
import CartElement from '../Cart/CartElement'
import { nanoid } from 'nanoid'


const Cart = () => {

    const dispatch = useDispatch();
    const position = 'cart'
    const cartProducts = useSelector(state => state.cart)
    return (
        <>
            <NavBar position={'cart'} />
            <div className='m-4'>
                <p>Total: {cartProducts.cartTotal}</p>
                <button className='btn btn-danger' onClick={() => dispatch(emptyCart())}>
                    Svuota Carrello
                </button>
            </div>
            <div className='container-fluid d-flex flex-wrap gap-4 m-5'>
                {cartProducts.cartElements.map((product) => {
                    return (
                        <CartElement
                            key={nanoid()}
                            src={product.obj.img}
                            title={product.obj.title}
                            price={product.obj.price}
                            asin={product.obj.asin}
                            quantity={product.quantity}
                            product={product}
                        />
                    )
                })}
            </div>


        </>
    )
}

export default Cart