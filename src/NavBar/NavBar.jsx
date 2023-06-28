import React from 'react'
import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { showGenre, nameGenre, searchBook } from '../store/bookSlice';




const NavBar = () => {
    const books = useSelector(state => state.books);
    console.log(books);

    const dispatch = useDispatch();

    const selectGenre = (genre, name) => {
        dispatch(showGenre(genre));
        dispatch(nameGenre(name));
    }

    const filterBooks = (e) => {
        dispatch(searchBook(e.target.value));
        console.log(e.target.value)
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">BOOKS</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-end'>
                    <Nav
                        className="me-auto my-2 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className='d-flex align-items-center'>
                            <NavDropdown title="Genres" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.fantasy, 'Fantasy')}>Fantasy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.history, 'History')}>History</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.horror, 'Horror')}>Horror</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.scifi, 'Sci Fi')}>SciFi</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.romance, 'Romance')}>Romance</NavDropdown.Item>
                            </NavDropdown>
                            <div className='d-flex'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="me-2 search-bar"
                                    onInput={filterBooks}
                                />
                                
                            </div>
                            <Navbar.Text className='cart-icon'>
                                    <Nav.Link >Cart 0 </Nav.Link>
                            </Navbar.Text>
                        </div>


                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar