import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI'
import Book from './Book'
import BookShelfType from './BookShelfType'

class SearchForBooks extends Component {

  static propTypes = {
      onBookMoved: PropTypes.func.isRequired,
      books: PropTypes.array.isRequired
  }

  state = {
      booksToDisplay: []
  }

  render() {
      const { onBookMoved, books} = this.props;

      return <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form onSubmit={ this.handleSubmit }>
              <input type="text" name="searchString" placeholder="Search by title or author"/>
            </form>

          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.booksToDisplay.map((book, index) => (<li key={book.id}><Book book={book} bookShelfType={this.findBookShelfType(books, book)} onBookMoved={onBookMoved}/></li>))}
            </ol>
          </div>
        </div>
      </div>
  }

  findBookShelfType = (books, book) => {
    let res = books.find((b) => b.id === book.id)
    if (res) {
      return BookShelfType.enumValueOf(res.shelf)
    }

    return BookShelfType.none
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash:true})
    if(values.searchString) {
      BooksAPI.search(values.searchString, 20)
        .then((books) => (this.setState({booksToDisplay: books})))
        .catch(() => (this.setState({booksToDisplay: []})))
    }
    else {
      this.setState({booksToDisplay: []})
    }
  }
}

export default SearchForBooks
