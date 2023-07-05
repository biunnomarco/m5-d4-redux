import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CommentsModal.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getComments, getPostPayload, postComment, refresh, setAsin, setCommentID } from '../store/commentsSlice';


const CommentsModal = ({title, close, asin}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');
   
    function pushPost() {
        let postPayload = {
            "comment": comment,
            "rate": rate,
            "elementId": asin,
        };
        dispatch(postComment(postPayload)).then(() => dispatch(refresh()))
        close()
    }

    return (
        <div
            className="modal show comments-modal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered size="lg" backdrop="static">
                <Modal.Header >
                    <Modal.Title>"{title}"</Modal.Title>
                </Modal.Header>

                <Modal.Body  className='d-flex flex-column'>
                    <input style={{height: '150px'}} type="text" placeholder='Insert comment' onChange={(e) => setComment(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Insert a rate from 1 to 5' onChange={(e) => setRate(e.target.value)}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary" onClick={()=>pushPost()}>Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CommentsModal