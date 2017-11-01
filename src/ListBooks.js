import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

state = {
  booksCurrentlyReading: [],
  booksWantToRead: [],
  booksRead: []
}

filterBooks = (books, shelf) => {
  return books.filter((book) => book.shelf === shelf)
}

componentDidMount() {
  BooksAPI.getAll().then((books) => (this.setState({
    booksCurrentlyReading: this.filterBooks(books,  "currentlyReading"),
    booksWantToRead: this.filterBooks(books, "wantToRead"),
    booksRead: this.filterBooks(books, "read")
  })))
}

  render() {
    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">

         <BookShelf title="Currently Reading" books={this.state.booksCurrentlyReading}/>

         <BookShelf title="Want to Read" books={this.state.booksWantToRead}/>

         <BookShelf title="Read" books={this.state.booksRead}/>

       </div>
       <Link to='/search' className='open-search'> Search For Books
				</Link>
     </div>
   )
  }
}

export default ListBooks
