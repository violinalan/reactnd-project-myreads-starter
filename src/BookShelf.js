import React from 'react'
import './App.css'
import BookList from './BookList'

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                <BookList list={props.list} handleShelfChange={props.handleShelfChange} />
            </ol>
        </div>
    </div>
)

export default BookShelf