import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI'

class Book extends Component {

	static propTypes = {
			book: PropTypes.object.isRequired
	  }

	render() {

		const { book, shelfType } = this.props;
		return <div className="book">
										<div className="book-top">
											<div className="book-cover" style={{
												width: 130,
				              	height: 190,
												backgroundImage: `url("${book.imageLinks.thumbnail}")`
											}}>
											</div>
											<div className="book-shelf-changer">
													<select onChange={this.handleChange} defaultValue={shelfType}>
														<option value="none" disabled>Move to...</option>
														<option value="currentlyReading">Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>
											</div>
										</div>

										<div className="book-title">{ book.title }</div>
										<div className="book-authors">{ book.authors ? book.authors.join(', ') : '' }</div>
									</div>;
	}

	handleChange = (e) => {
    BooksAPI.update(this.props.book, e.target.value).then((json) => console.log(json))
  }
}

export default Book
