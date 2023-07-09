import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../CommentsModal/CommentsModal.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPutPayload, postComment, refresh, setAsin, putComment, setPutAsin } from '../store/commentsSlice';


const ModifyModal = ({title, close, asin}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');
    
    
    const thisComment = useSelector(state=> state.comments.currentComment)
    /* console.log(thisComment) */
    
    useEffect(()=> {
        setComment(thisComment.comment) 
        setRate(thisComment.rate)
    }, [])
    
    let putPayload = {
            "comment": comment,
            "rate": rate,
            "_id": thisComment._id,
        };
    

    function putPost() {
        dispatch(getPutPayload(putPayload))
        dispatch(setPutAsin(asin))
        dispatch(putComment()).then(()=> close()).then(dispatch(refresh()))
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
                    <input style={{height: '150px'}} type="text" placeholder={thisComment.comment} onChange={(e) => {setComment(e.target.value)}} />
                    <br />
                    <input type="text" placeholder={thisComment.rate} onChange={(e) => setRate(e.target.value)}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary" onClick={putPost}>Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ModifyModal