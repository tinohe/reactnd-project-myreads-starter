import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

	static propTypes = {
			book: PropTypes.object.isRequired,
			onBookMoved: PropTypes.func.isRequired,
			bookShelf: PropTypes.string.isRequired
	  }

	render() {

		const { book, bookShelf} = this.props;

		return <div className="book">
			<div className="book-top">
				<div className="book-cover" style={{
					width: 130,
					height: 190,
					backgroundImage: `url("${book.imageLinks.thumbnail}")`
				}}>
				</div>
				<div className="book-shelf-changer">
					<select onChange={this.handleChange} defaultValue={bookShelf}>
						<option value="noValue" disabled>Move to...</option>
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
		this.props.onBookMoved(this.props.book, e.target.value)
  }
}

export default Book
