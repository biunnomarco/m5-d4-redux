import React from 'react'
import NavBar from '../NavBar/NavBar'
import MyCarousel from '../MyCarousel/MyCarousel'
import MyBody from '../MyBody/MyBody'
import Footer from '../Footer/Footer'

const Hompage = () => {
  return (
    <div className="App">
        <NavBar fixed="top"/>
        <MyCarousel />
        <MyBody />
        <Footer />
    </div>
  )
}

export default Hompage