import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
	    title: PropTypes.string.isRequired,
      bookShelf:PropTypes.string.isRequired,
      onBookMoved: PropTypes.func.isRequired,
	    books: PropTypes.array
	  }

  render() {
    const {bookShelf, title, onBookMoved, books} = this.props

    return <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (<li key={book.id}><Book book={book} onBookMoved={onBookMoved} bookShelf={bookShelf}/></li>)) }
          </ol>
        </div>
      </div>
    </div>
  }
}

export default BookShelf
