import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'


import SearchForBooks from './SearchForBooks'
import ListBooks from './ListBooks'

import { Route } from 'react-router-dom';

import './App.css'

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">

      <Route
					 exact
		       path='/'
           render={ () => (   <ListBooks/>)}
       />
       <Route
           exact
           path='/search'
            render={ () => (   <SearchForBooks/>)}
        />
      </div>
    )
  }
}

export default BooksApp
