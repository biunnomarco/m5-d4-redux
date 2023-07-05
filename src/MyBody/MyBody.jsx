import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestReleases from '../LatestReleases/LatestReleases';
import CommentSection from '../CommentSection/CommentSection';




const MyBody = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='col-7 col-lg-8'><LatestReleases /></Col>
                <Col className='col-5 col-lg-4'><CommentSection /></Col>
            </Row>
        </Container>
    )
}

export default MyBody