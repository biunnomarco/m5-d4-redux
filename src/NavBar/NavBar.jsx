import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { showGenre, nameGenre, searchBook, selectedBook } from '../store/bookSlice';
import { setAsin } from '../store/commentsSlice';
import icon from '../Assets/icon.png'
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';



const NavBar = (position) => {
    const books = useSelector(state => state.books);
    const cart = useSelector(state => state.cart);

    /* console.log(books); */

    const dispatch = useDispatch();

    const selectGenre = (genre, name) => {
        dispatch(showGenre(genre));
        dispatch(nameGenre(name));
        dispatch(setAsin(''))
        dispatch(selectedBook(''))
    }

    const filterBooks = (e) => {
        dispatch(searchBook(e.target.value));
        /* console.log(e.target.value) */
    }


    return (
        <Navbar  className="bg-body-tertiary fixed">
            <Container fluid>
                
                <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-end'>
                    <Nav
                        className="me-auto my-2 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item>
                            <Link to={'/'} className='link home'>
                                <img className='logo me-2' src={icon} alt='' /> 
                                <span><b>EPIBOOKS</b></span>
                            </Link>
                        </Nav.Item>
                        <div className='d-flex align-items-center'>
                            <NavDropdown title="Genres" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.fantasy, 'Fantasy')}>Fantasy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.history, 'History')}>History</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.horror, 'Horror')}>Horror</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.scifi, 'Sci Fi')}>SciFi</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => selectGenre(books.allGenres.romance, 'Romance')}>Romance</NavDropdown.Item>
                            </NavDropdown>
                            <div className={position.position === 'cart' ? "d-none" : "d-flex"}>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="me-2 search-bar  ps-1 pb-1"
                                    onInput={filterBooks}
                                />
                            </div>
                        </div>
                        <Navbar.Text className='cart-icon'>
                            <Link className='link' to={"/cart"}>
                                <NavItem >Cart {cart.cartNumber} </NavItem>
                            </Link>
                        </Navbar.Text>

                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar