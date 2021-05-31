import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

const SearchPage = (props) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleQueryChange = (query) => setQuery(query)

    useEffect(() => {
        BooksAPI.search(query)
            .then((books) => {
                if(Array.isArray(books)) { 
                    saveResults(books)
                 }
                 else setResults([])
            })
    }, [query])

    const saveResults = (books) => {
        books.forEach(book => {
            props.booksOnShelves.forEach(bookOnShelf => {
                if(book.id === bookOnShelf.id) book.shelf = bookOnShelf.shelf 
            })
        })
        setResults(books)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                        onChange={e => handleQueryChange(e.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <BookList list={results} handleShelfChange={props.handleShelfChange} />
                </ol>
            </div>
        </div>
    )
}

export default SearchPage