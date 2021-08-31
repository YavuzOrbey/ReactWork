import React from 'react';
import logo from './logo.svg';
import {booksData} from './books-data'
import './App.css';
import BookListYavuz from './BookListYavuz'

function App(props:any) {
  return (
    <BookListYavuz books={booksData} />
  );
}

export default App;
