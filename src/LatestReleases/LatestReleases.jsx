import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleBook from '../SingleBook/SingleBook';


const LatestReleases = () => {

  const books = useSelector(state => state.books);
  return (
    <>
      <h2 className='mt-4'>{books.genre}</h2>
      {books.data.length === 0 && (<p>Selezionare un genere dalla lista</p>)}
      
      <div className="row g-4 mt-4">
        {books.data.map((book) => {
          return (
            <div className="col justify-content-center d-flex" key={book.asin}>
              <SingleBook book={book}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LatestReleases