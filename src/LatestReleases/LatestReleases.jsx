import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleBook from '../SingleBook/SingleBook';


const LatestReleases = () => {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    setIsSelected(!isSelected)
    console.log(isSelected)
    /* e.currentTarget.classList.toggle('red-border') */
  }

  const books = useSelector(state => state.books);
  return (
    <>
      <h2 className='mt-4'> <b> Category: </b><em>{books.genre}</em></h2>
      <hr />
      {books.data.length === 0 && (<p>Selezionare un genere dalla lista</p>)}
      
      <div className="row g-4 mt-4">
        {books.data.map((book) => {
          return (
            <div onClick={(e)=>toggleIsSelected()} className={"col justify-content-center d-flex m-2"} key={book.asin}>
              <SingleBook book={book}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LatestReleases