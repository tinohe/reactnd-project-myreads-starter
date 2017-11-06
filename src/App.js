import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import SearchForBooks from './SearchForBooks'
import ListBooks from './ListBooks'
import ErrorPage from './ErrorPage'


import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
  }

    filterBooks = (books, shelf) => {
      return books.filter((book) => book.shelf === shelf.name)
    }

    removeBook = (books, book) => {
      return books.filter((b) => b.id !== book.id)
    }

    onBookMoved = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf
          this.setState(state => ({
                books: state.books.filter(b=> b.id !== book.id).concat([book])
          }))
        }
      )
  }

  componentDidMount() {
    BooksAPI.getAll().then((b) => (this.setState({
      books: b
    })))
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path='/'
            render={ () => (   <ListBooks onBookMoved={this.onBookMoved} books={this.state.books}/>)}
          />
          <Route
            exact
            path='/search'
            render={ () => (   <SearchForBooks onBookMoved={this.onBookMoved} books={this.state.books}/>)}
          />
          <Route
            render={ () => (   <ErrorPage/>)}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
