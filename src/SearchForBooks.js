import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

import Book from './Book'
 import * as BooksAPI from './BooksAPI'

class SearchForBooks extends Component {

state = {
    booksToDisplay: []
}

  render() {
    return <div className="search-books">
      <div className="search-books-bar">
      <Link to='/' className='close-search'> Close
       </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <form onSubmit={ this.handleSubmit } className="">
            <input type="text" name="searchString" placeholder="Search by title or author"/>
          </form>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
          {this.state.booksToDisplay.map((book, index) => (<li key={index}><Book title={book.title} authors={book.authors} imageurl={book.imageLinks.thumbnail}/></li>))}
      </div>
    </div>
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash:true})
    BooksAPI.search(values.searchString, 20).then((books) => (this.setState({booksToDisplay: books})))
  }
}

export default SearchForBooks
