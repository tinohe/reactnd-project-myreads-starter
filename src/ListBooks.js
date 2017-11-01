import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

state = {
  currentlyReading: [],
  wantToRead: [],
  read: []
}

filterBooks = (books, shelf) => {
  return books.filter((book) => book.shelf === shelf)
}
removeBook = (books, book) => {
  return books.filter((b) => b.id !== book.id)
}

componentDidMount() {
  BooksAPI.getAll().then((books) => (this.setState({
    currentlyReading: this.filterBooks(books,  "currentlyReading"),
    wantToRead: this.filterBooks(books, "wantToRead"),
    read: this.filterBooks(books, "read")
  })))
}

onBookMoved = (book, shelf) => {
  if (shelf === "currentlyReading") {
    this.setState((state) => ({
      currentlyReading: state.currentlyReading.concat(book),
      wantToRead: this.removeBook(state.wantToRead, book),
      read: this.removeBook(state.read, book)
    }))
  }
    if (shelf === "wantToRead") {
      this.setState((state) => ({
        currentlyReading: this.removeBook(state.currentlyReading, book),
        wantToRead: state.wantToRead.concat(book),
        read: this.removeBook(state.read, book)
      }))
    }

    if (shelf === "read") {
      this.setState((state) => ({
        currentlyReading: this.removeBook(state.currentlyReading, book),
        wantToRead: this.removeBook(state.wantToRead, book),
        read: state.read.concat(book)
      }))
    }
  }

  render() {
    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">

         <BookShelf shelfType="currentlyReading" title="Currently Reading" onBookMoved={this.onBookMoved} books={this.state.currentlyReading}/>

         <BookShelf shelfType="wantToRead" title="Want to Read" onBookMoved={this.onBookMoved} books={this.state.wantToRead}/>

         <BookShelf shelfType="read" title="Read" onBookMoved={this.onBookMoved} books={this.state.read}/>

       </div>
       <Link to='/search' className='open-search'> Search For Books
				</Link>
     </div>
   )
  }
}

export default ListBooks
