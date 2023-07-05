import React from 'react'
import NavBar from '../NavBar/NavBar'
import MyCarousel from '../MyCarousel/MyCarousel'
import MyBody from '../MyBody/MyBody'

const Hompage = () => {
  return (
    <div className="App">
        <NavBar fixed="top"/>
        <MyCarousel />
        <MyBody />
    </div>
  )
}

export default Hompage