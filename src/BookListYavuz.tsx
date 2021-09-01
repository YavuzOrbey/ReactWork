import React, {useState} from 'react'
import BookYavuz from "./BookYavuz"
import BookTypeYavuz from "./BookTypeYavuz";
import BookEditYavuz from "./BookEditYavuz";
import  './BookListYavuz.css';
const BookListYavuz = (props:any) => {
    const {books} = props;

    let editableBooks:any = {};
    const [currentBookList, setCurrentBookList] = useState(books)
    currentBookList.forEach((book:BookTypeYavuz)=> {
        editableBooks[book.id] = false;
    })
    const [editableBookList, setEditableBookList] = useState(editableBooks)

    const deleteBook = (id:number) => {
        const newBookList = currentBookList.filter((book:BookTypeYavuz)=>book.id!==id)
        setCurrentBookList(newBookList)
    }

    const editBook = (id:number) => {
        let newEditableBookList = {...editableBookList}
        newEditableBookList[id] = true;
        console.log(newEditableBookList)
        setEditableBookList(newEditableBookList)
    }

    const updateBook = (id:number) => {
        let newEditableBookList = {...editableBookList}
        newEditableBookList[id] = false;
        setEditableBookList(newEditableBookList)
    }
    return <div className="bookList container">
        <div className="row">
    {
    currentBookList.map((currentBook:BookTypeYavuz, index:number)=> {
        const whichBook = editableBookList[currentBook.id]===true ?  <BookEditYavuz key={currentBook.id} book={currentBook} deleteBook={deleteBook} updateBook={updateBook}/>:
        <BookYavuz key={currentBook.id} book={currentBook} deleteBook={deleteBook} editBook={editBook}/>;


        console.log(editableBookList[currentBook.id]===true)
        return <div className="col-md-4 mb-4">{whichBook}</div>
    }
    
    )}
    </div></div>}
export default BookListYavuz;