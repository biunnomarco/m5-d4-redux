import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import CommentsModal from '../CommentsModal/CommentsModal';
import { useState } from 'react';


const SingleBook = ({ book }) => {
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  function toggleCommentModal() {
    setIsCommentsModalOpen(!isCommentsModalOpen)
  }

  return (
    <>
      <Card style={{ width: '18rem', height: '38rem' }}>
        <Card.Img variant="top" src={book.img} className='book-img' />
        <Card.Body>
          <Card.Title className='book-title'>{book.title}</Card.Title>
          <br />
          <Card.Title><b>Price: </b>{book.price}€</Card.Title>


        </Card.Body>
        <Card.Footer className='d-flex justify-content-around'>
          <Button variant="primary" onClick={() => toggleCommentModal()}>Show Comments</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>

      {isCommentsModalOpen && (<CommentsModal book = {book} asin={ book.asin } close={toggleCommentModal}/>)}
    </>
  )
}

export default SingleBook