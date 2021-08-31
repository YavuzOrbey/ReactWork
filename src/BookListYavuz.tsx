import React from 'react'
import BookYavuz from "./BookYavuz"
import BookTypeYavuz from "./BookTypeYavuz";
import  './BookListYavuz.css';
const BookListYavuz = (props:any) => {
    const {books} = props;
    console.log(books)
    return <div className="bookList">
    {books.map((currentBook:BookTypeYavuz)=><BookYavuz key={currentBook.id} book={currentBook}/>) }
    </div>
}

export default BookListYavuz;