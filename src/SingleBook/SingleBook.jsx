import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import CommentsModal from '../CommentsModal/CommentsModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAsin } from '../store/commentsSlice';
import { selectedBook } from '../store/bookSlice';
import cartSlice from '../store/cartSlice';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';



const SingleBook = ({ book, position }) => {
  let quantity = 0;

  const cart = useSelector(state => state.cart)
  cart.cartElements.forEach((element) => {
    if (book.asin === element.obj.asin) quantity = element.quantity
  })

  const dispatch = useDispatch()
  function selectBook() {
    dispatch(setAsin(book.asin))
    dispatch(selectedBook(book.title))
  }

  return (
    <>
      <Card style={{ width: '18rem', height: '38rem' }} /* className={isSelected ? 'red-border' : ''} */>
        <Card.Img onClick={()=>selectBook()} variant="top" src={book.img} className='book-img' />
        <Card.Body>
          <Card.Title className='book-title'>{book.title}</Card.Title>
          <br />
          <Card.Title><b>Price: </b>{book.price}€</Card.Title>


        </Card.Body>
        <Card.Footer className='d-flex justify-content-around'>
          {!position && (<Link to={`/book/${book.asin}`}>
            <Button variant='primary'> Show Details </Button>
          </Link>)}
          
          <Button variant="success" onClick={() =>dispatch(addToCart(book))}>Add to Cart ({quantity})</Button>
        </Card.Footer>
      </Card>

    </>
  )
}

export default SingleBook