import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookShelfType from './BookShelfType'

class Book extends Component {

	static propTypes = {
			book: PropTypes.object.isRequired,
			onBookMoved: PropTypes.func.isRequired,
			bookShelfType: PropTypes.object.isRequired
	  }

	render() {

		const { book, bookShelfType} = this.props;

		return <div className="book">
			<div className="book-top">
				{book.imageLinks.thumbnail &&
					<div className="book-cover" style={{
						width: 130,
						height: 190,
						backgroundImage: `url("${book.imageLinks.thumbnail}")`
					}}>
					</div>
				}
				<div className="book-shelf-changer">
					<select onChange={this.handleChange} defaultValue={bookShelfType.name}>
						<option value="noValue" disabled>Move to...</option>
						<option value={BookShelfType.currentlyReading.name}>Currently Reading</option>
						<option value={BookShelfType.wantToRead.name}>Want to Read</option>
						<option value={BookShelfType.read.name}>Read</option>
						<option value={BookShelfType.none.name}>None</option>
					</select>
				</div>
			</div>

			<div className="book-title">{ book.title }</div>
			<div className="book-authors">{ book.authors ? book.authors.join(', ') : '' }</div>
		</div>;
	}

	handleChange = (e) => {
		this.props.onBookMoved(this.props.book, e.target.value)
  }
}

export default Book
