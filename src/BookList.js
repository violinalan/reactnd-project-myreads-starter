import React from 'react'
import './App.css'

const BookList = (props) => (
    props.list
    .filter(book => book.imageLinks )
    .map(book => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select 
                    onChange={e => {props.handleShelfChange(book, e.target.value)}}
                    value={book.shelf ? book.shelf : "none"}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
    ))
)

export default BookList