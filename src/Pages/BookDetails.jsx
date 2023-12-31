import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../store/detailsSlice';
import ModifyModal from '../ModifyModal/ModifyModal';
import { getComments, setAsin, setCommentID, deleteComment } from '../store/commentsSlice';
import SingleBook from '../SingleBook/SingleBook';
import { Card, Button, Alert } from 'react-bootstrap';
import { setCurrentComment } from '../store/commentsSlice';
import CommentsModal from '../CommentsModal/CommentsModal';
import NavBar from '../NavBar/NavBar'




const BookDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const allComments = useSelector(state => state.comments)
  const allBooks = useSelector(state => state.books)

  useEffect(() => {
    dispatch(getDetails(id))
    dispatch(setAsin(id))
    dispatch(getComments()).then(() => console.log(allComments))
  }, [])

  const details = useSelector(state => state.details)

  const [isModifyComment, setIsModifyComment] = useState(false)
  const [postCommentModal, setPostCommentModal] = useState(false)



  function deletePost(id) {
    console.log('sonoqui')
    dispatch(setCommentID(id));
    dispatch(deleteComment()).then(() => dispatch(getComments()));
  }

  function toggleComment() {
    setPostCommentModal(!postCommentModal)
    dispatch(getComments())
  }

  function toggleModifyComment() {
    setIsModifyComment(!isModifyComment)
    dispatch(getComments())
  }

  return (

    <>

      <NavBar position={'cart'} />

      <div className='d-flex' >

        <div className='col-6 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
          <SingleBook book={details.details} position={'BookDetails'} />
        </div>

        <div className='col-6'>
          <h1 className='my-4'>Comment Area</h1>

          {allComments.comments.length === 0 && (<Alert style={{ width: 'fit-content' }} key='success' variant='success'>
            No comments for this book, comment for first
          </Alert>)}
          {allComments.status === 'pending' && (<h6>Loading...</h6>)}
          {allComments.status === 'error' && (<h6>Something went Wrong...</h6>)}
          {allComments.asin && (<Button className='my-3' variant="success" onClick={() => toggleComment()}>Add A Comment</Button>)}

          <div className='d-flex flex-wrap gap-3'>
            {allComments.status === 'idle' && (
              allComments.comments.map((comment) => {
                return (
                  <Card className='comment-box' key={comment._id} style={{ width: '22rem', height: 'fit-content' }}>
                    <Card.Body>
                      <Card.Title> <em> {comment.author}</em></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted"><em>Rate: {comment.rate}</em></Card.Subtitle>
                      <Card.Text>{comment.comment}</Card.Text>
                      <Button
                        size='sm'
                        className='btn-danger btn'
                        onClick={() => deletePost(comment._id)}>
                        Delete
                      </Button>
                      <Button
                        size='sm'
                        className='btn-success btn mx-2'
                        onClick={() => { dispatch(setCurrentComment(comment)); toggleModifyComment() }}>
                        Modify Comment
                      </Button>
                    </Card.Body>
                  </Card>
                )
              })
            )}
          </div>
          {postCommentModal && (<CommentsModal title={details.details.title} asin={allComments.asin} close={() => toggleComment()} />)}
          {isModifyComment && (<ModifyModal asin={allComments.asin} title={details.details.title} close={() => toggleModifyComment()} />)}

        </div>
      </div>
    </>
  )
}

export default BookDetails