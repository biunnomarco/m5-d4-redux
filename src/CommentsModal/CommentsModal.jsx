import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CommentsModal.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getComments, setAsin, setCommentID } from '../store/commentsSlice';


const CommentsModal = ({ asin, close, book }) => {

    const dispatch = useDispatch()
    dispatch(setAsin(asin))

    useEffect(() => {
        //dispatch di una azione, commentSlice
        dispatch(getComments())
    }, [])

    const allComments = useSelector(state => state.comments);
    const status = useSelector(state => state.comments.status);

    function deletePost(id) {
        dispatch(setCommentID(id));
        dispatch(deleteComment())
    }
    return (
        <div
            className="modal show comments-modal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered size="lg" backdrop="static">
                <Modal.Header >
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {status === 'pending' && (<h6>Loading...</h6>)}
                    {status === 'error' && (<h6>Something went Wrong...</h6>)}
                    {allComments.comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <p><b>Author: </b>{comment.author}</p>
                                <p><b>Comment: </b>{comment.comment}</p>
                                <p><b>Rate: </b>{comment.rate}</p>
                                <button onClick={() => { deletePost(comment._id) }}>Delete Comment</button>
                                <hr />
                            </div>
                        )
                    })}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CommentsModal