import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommentSection from '../CommentSection/CommentSection';
import { setOffCanvas } from '../store/offCanvasSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MyOffcanvas = () => {
    /* const [show, setShow] = useState(false); */

    const offCanvasState = useSelector(state => state.myOffCanvas)
    const handleClose = () => {dispatch(setOffCanvas(false))};
    const handleShow = () => {dispatch(setOffCanvas(true))};

    const dispatch = useDispatch()

    return (
        <>
          

            <Offcanvas show={offCanvasState.show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <CommentSection />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}

export default MyOffcanvas