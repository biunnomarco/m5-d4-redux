import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestReleases from '../LatestReleases/LatestReleases';
import CommentSection from '../CommentSection/CommentSection';
import MyOffcanvas from '../Offcanvas/Offcanvas';




const MyBody = () => {
    return (

        <Container fluid>
            <Row>
                <Col key={'1'} className='col-xs-12 col-sm-7 col-lg-8'><LatestReleases /></Col>
                <Col key={'2'} className='d-none d-sm-block col-5 col-lg-4'><CommentSection /></Col>
                <MyOffcanvas />
            </Row>
        </Container>
    )
}

export default MyBody