import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { getComments, setCommentID, deleteComment, setCurrentComment } from '../store/commentsSlice'
import { Button } from 'react-bootstrap'
import CommentsModal from '../CommentsModal/CommentsModal'
import '../MyBody/MyBody.css'
import { ModalFooter } from 'react-bootstrap'
import ModifyModal from '../ModifyModal/ModifyModal'
import Alert from 'react-bootstrap/Alert';

const CommentSection = () => {

    const [postCommentModal, setPostCommentModal] = useState(false)
    const [isModifyComment, setIsModifyComment] = useState(false)

    function toggleComment() {
        setPostCommentModal(!postCommentModal)
    }

    const dispatch = useDispatch()

    const allComments = useSelector(state => state.comments)
    const allBooks = useSelector(state => state.books) // allBooks.SelectedBook
    

    useEffect(() => {
        dispatch(getComments())
    }, [allComments.asin, allComments.refresh])

    function deletePost(id) {
        dispatch(setCommentID(id));
        dispatch(deleteComment()).then(() => dispatch(getComments()));
    }
    function toggleModifyComment() {
        setIsModifyComment(!isModifyComment)
        dispatch(getComments())
    }
    return (
        <div className=' must-sticky'>
            <h2 className='my-4 pb-3'>Comment Section</h2>
            <h4 className='mb-4'>{allBooks.SelectedBook}</h4>
            {!allComments.asin && (<Alert key='success' variant='success'>
                Select a Book to see related comments
            </Alert>)}
            {allComments.status === 'pending' && (<h6>Loading...</h6>)}
            {allComments.status === 'error' && (<h6>Something went Wrong...</h6>)}
            {allComments.asin && (<Button variant="success" onClick={() => toggleComment()}>Add A Comment</Button>)}
            {!allComments.comments.length && (
                <Alert key={'warning'} variant={'warning'} className='mt-3'>
                    Ancora nulla da visualizzare, commenta per primo questo libro
                </Alert>)}
                <div className='d-flex flex-column-reverse'>
            {allComments.asin && (
                allComments.comments.map((comment) => {
                    return (
                        <div key={comment._id} className='mt-3 comment-box'>
                            <p><b>User: </b> <em> "{comment.author}"</em></p>
                            <p><b>Comment: </b>{comment.comment}</p>
                            <p><b>Rate: </b>{comment.rate}</p>
                            {/* <StarRating rate={comment.rate}/> */}
                            <ModalFooter>
                                <button
                                    className='btn-danger btn'
                                    onClick={() => deletePost(comment._id)}>
                                    Delete
                                </button>
                                <button
                                    className='btn-success btn mx-2'
                                    onClick={() => { dispatch(setCurrentComment(comment)); toggleModifyComment() }}>
                                    Modify Comment
                                </button>
                                {isModifyComment && (<ModifyModal asin={allComments.asin} title={allBooks.SelectedBook} close={() => toggleModifyComment()} />)}
                            </ModalFooter>
                        </div>
                    )
                })
            )}
            </div>
            {postCommentModal && (<CommentsModal title={allBooks.SelectedBook} asin={allComments.asin} close={() => toggleComment()} />)}
        </div>
    )
}

export default CommentSection