import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const BookCase = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <BookShelf 
                    list={props.readingList} 
                    title={'Currently Reading'} 
                    handleShelfChange={props.handleShelfChange} />
                <BookShelf 
                    list={props.wishList} 
                    title={'Want To Read'} 
                    handleShelfChange={props.handleShelfChange} />
                <BookShelf 
                    list={props.readList} 
                    title={'Read'} 
                    handleShelfChange={props.handleShelfChange} />
            </div>
        </div>
        <div className="open-search">
            <Link to='/search'><button type='button'>Add a book</button></Link>
        </div>
    </div>
)

export default BookCase