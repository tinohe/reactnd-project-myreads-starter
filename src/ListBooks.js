import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';

class ListBooks extends Component {

  static propTypes = {
      onBookMoved: PropTypes.func.isRequired,
      bookShelves: PropTypes.object.isRequired
  }

  render() {
    const { onBookMoved, bookShelves} = this.props;

    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">

         <BookShelf bookShelf="currentlyReading" title="Currently Reading" onBookMoved={onBookMoved} books={bookShelves.currentlyReading}/>

         <BookShelf bookShelf="wantToRead" title="Want to Read" onBookMoved={onBookMoved} books={bookShelves.wantToRead}/>

         <BookShelf bookShelf="read" title="Read" onBookMoved={onBookMoved} books={bookShelves.read}/>
         
       </div>
       <Link to='/search' className='open-search'>Search For</Link>
     </div>
   )
  }
}

export default ListBooks
