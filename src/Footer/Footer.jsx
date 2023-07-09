import React from 'react'
import './Footer.css'
import { useState } from 'react'

const Footer = () => {

    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center pt-2' style={{background: "lightgrey"}}>
           <p><link rel="stylesheet" href="#" />Chi Siamo?</p>
           <p><link rel="stylesheet" href="#" />Cosa Facciamo?</p>
           <p><link rel="stylesheet" href="#" />Posizioni aperte</p>
           <p><link rel="stylesheet" href="#" />Bestemmia con noi!</p>
        </div>
    )
}

export default Footer