import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleBook from '../SingleBook/SingleBook';
import { Alert } from 'react-bootstrap';
import { nanoid } from 'nanoid';


const LatestReleases = () => {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    setIsSelected(!isSelected)
    /* e.currentTarget.classList.toggle('red-border') */
  }

  const books = useSelector(state => state.books);
  return (
    <>
      <h2 className='mt-4'> <b> Category: </b><em>{books.genre}</em></h2>
      <hr />


      <div className="row g-4 mt-4">
        {books.data.length === 0 && (<Alert style={{width: '75%', margin: 'auto'}} key='danger' variant='danger'>
          Ops... ci dispiace ma il libro che cerchi non è nei nostri scaffali!!
        </Alert>)}
        {books.data.map((book) => {
          return (
            <>

              <div onClick={(e) => toggleIsSelected()} className={"col justify-content-center d-flex m-2"} key={nanoid()}>
                <SingleBook book={book} />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default LatestReleases