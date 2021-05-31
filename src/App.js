import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookCase from './BookCase'
import SearchPage from './SearchPage'

const BooksApp = () => {
  const [books, setBooks] = useState([])
  const [readingList, setReadingList] = useState([])
  const [wishList, setWishList] = useState([])
  const [readList, setReadList] = useState([])

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books)
      })
  }, [])

  useEffect(() => {
    setReadingList(books.filter((book) => book.shelf === 'currentlyReading'))
    setWishList(books.filter((book) => book.shelf === 'wantToRead'))
    setReadList(books.filter((book) => book.shelf === 'read'))
  }, [books])

  const handleShelfChange = (book, value) => {
    BooksAPI.update(book, value)
      .then(() => 
        BooksAPI.getAll()
      .then((books) => {
        setBooks(books)
      }))
  }

  return (
    <>
      <Route exact path='/' render={() => (
        <BookCase 
          readingList={readingList}
          wishList={wishList}
          readList={readList}
          handleShelfChange={handleShelfChange}
        />
      )} />
      <Route exact path='/search' render={() => (
        <SearchPage booksOnShelves={books} handleShelfChange={handleShelfChange} />
      )} />
    </>
  )
}

export default BooksApp
