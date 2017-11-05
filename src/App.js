import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'


import SearchForBooks from './SearchForBooks'
import ListBooks from './ListBooks'

import { Route } from 'react-router-dom';

import './App.css'

class BooksApp extends Component {
  state = {
    bookShelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

    filterBooks = (books, shelf) => {
      return books.filter((book) => book.shelf === shelf)
    }

    removeBook = (books, book) => {
      return books.filter((b) => b.id !== book.id)
    }

    onBookMoved = (book, shelf) => {
      BooksAPI.update(book, shelf).then((json) => console.log(json))

      if (shelf === "none") {
        this.setState((state) => ({
          bookShelves: {
            currentlyReading: this.removeBook(state.bookShelves.currentlyReading, book),
            wantToRead: this.removeBook(state.bookShelves.wantToRead, book),
            read: this.removeBook(state.bookShelves.read, book)
        }
        }))
      }

      if (shelf === "currentlyReading") {
        this.setState((state) => ({
          bookShelves: {
            currentlyReading: state.bookShelves.currentlyReading.concat(book),
            wantToRead: this.removeBook(state.bookShelves.wantToRead, book),
            read: this.removeBook(state.bookShelves.read, book)
        }
        }))
      }

      if (shelf === "wantToRead") {
        this.setState((state) => ({
            bookShelves: {
              currentlyReading: this.removeBook(state.bookShelves.currentlyReading, book),
              wantToRead: state.bookShelves.wantToRead.concat(book),
              read: this.removeBook(state.bookShelves.read, book)
        }
        }))
      }

      if (shelf === "read") {
        this.setState((state) => ({
            bookShelves: {
              currentlyReading: this.removeBook(state.bookShelves.currentlyReading, book),
              wantToRead: this.removeBook(state.bookShelves.wantToRead, book),
              read: state.bookShelves.read.concat(book)
        }
        }))
      }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => (this.setState({
      bookShelves: {
        currentlyReading: this.filterBooks(books,  "currentlyReading"),
        wantToRead: this.filterBooks(books, "wantToRead"),
        read: this.filterBooks(books, "read")
    }
    })))
  }

  render() {
    return (
      <div className="app">

        <Route
          exact
          path='/'
          render={ () => (   <ListBooks onBookMoved={this.onBookMoved} bookShelves={this.state.bookShelves}/>)}
        />
        <Route
          exact
          path='/search'
          render={ () => (   <SearchForBooks onBookMoved={this.onBookMoved} bookShelves={this.state.bookShelves}/>)}
        />
      </div>
    )
  }
}

export default BooksApp
