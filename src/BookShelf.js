import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
	    title: PropTypes.string.isRequired,
	    books: PropTypes.array
	  }

  render() {
    const {title, books} = this.props

    return <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { books.map((book, index) => (<li key={index}><Book  title={book.title} authors={book.authors} style={book.style}/></li>)) }
                </ol>
              </div>
            </div>
        </div>
  }
}

export default BookShelf
