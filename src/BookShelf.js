import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
	    title: PropTypes.string.isRequired,
      bookShelfType:PropTypes.object.isRequired,
      onBookMoved: PropTypes.func.isRequired,
	    books: PropTypes.array
	  }

  render() {
    const {bookShelfType, title, onBookMoved, books} = this.props

    return <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (<li key={book.id}><Book book={book} onBookMoved={onBookMoved} bookShelfType={bookShelfType}/></li>)) }
          </ol>
        </div>
      </div>
    </div>
  }
}

export default BookShelf
