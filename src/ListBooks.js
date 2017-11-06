import React from 'react'
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'
import BookShelfType from './BookShelfType'

const ListBooks = (props) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">

        <BookShelf bookShelfType={BookShelfType.currentlyReading} title="Currently Reading" onBookMoved={props.onBookMoved} books={props.bookShelves.currentlyReading}/>

        <BookShelf bookShelfType={BookShelfType.wantToRead} title="Want to Read" onBookMoved={props.onBookMoved} books={props.bookShelves.wantToRead}/>

        <BookShelf bookShelfType={BookShelfType.read} title="Read" onBookMoved={props.onBookMoved} books={props.bookShelves.read}/>

      </div>
      <Link to='/search' className='open-search'>Search For</Link>
    </div>
  )
}

export default ListBooks
