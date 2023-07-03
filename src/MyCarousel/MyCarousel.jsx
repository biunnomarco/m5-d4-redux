import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css'


const MyCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgix.bustle.com/uploads/image/2019/3/15/e99ea24b-7740-4861-b25b-e9edea376699-fantasyspring.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h3><b>Fantasy</b></h3>
            <p>Take a look at our Fantasy selection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pressblog.uchicago.edu/wp-content/uploads/antique-books-at-a-library1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='caption'>
            <h3><b>History</b></h3>
            <p>Take a look at our History selection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thenerddaily.com/wp-content/uploads/2020/12/2021-Anticipated-Fantasy-and-Sci-Fi-Book-Releases.jpg?x75403"
            alt="Third slide"
          />
          <Carousel.Caption className='caption'>
            <h3><b>Sci Fi</b></h3>
            <p>Take a look at our Sci Fi selection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/scarynerd.com/wp-content/uploads/2019/03/book3.jpg?w=1280&ssl=1"
            alt="Fourth slide"
          />
          <Carousel.Caption className='caption'>
            <h3><b>Horror</b></h3>
            <p>Take a look at our Horror selection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/lead-image-book-template-01-1663176282.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
            alt="Fifth slide"
          />
          <Carousel.Caption className='caption'>
            <h3><b>Romance</b></h3>
            <p>Take a look at our Romance selection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default MyCarousel