import React, {useState} from 'react'
import BookYavuz from "./BookYavuz"
import BookTypeYavuz from "./BookTypeYavuz";

import  './BookListYavuz.css';
const BookListYavuz = (props:any) => {
    const {books} = props;
    const [currentBookList, setCurrentBookList] = useState(books)
    const deleteBook = (id:number) => {
        const newBookList = currentBookList.filter((book:BookTypeYavuz)=>book.id!==id)
        setCurrentBookList(newBookList)
    }

    const editBook = (id:number) => {
        
    }
    return <div className="bookList container">
        <div className="row">
    {
    currentBookList.map((currentBook:BookTypeYavuz, index:number)=>
    <div className="col-md-4 mb-4">
        <BookYavuz key={currentBook.id} book={currentBook} deleteBook={deleteBook} editBook={editBook}/>
    </div>
    )}
    </div></div>}
export default BookListYavuz;