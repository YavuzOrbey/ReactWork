import React, {useState} from 'react'
import Book from "./components/Book"
import BookType from "./types/BookType";
import BookEdit from "./components/EditBook";
import  './style/BookList.css';
const BookListYavuz = (props:any) => {
    const {books} = props;

    let editableBooks:any = {};
    const [currentBookList, setCurrentBookList] = useState(books)
    currentBookList.forEach((book:BookType)=> {
        editableBooks[book.id] = false;
    })
    const [editableBookList, setEditableBookList] = useState(editableBooks)

    const deleteBook = (id:number) => {
        const newBookList = currentBookList.filter((book:BookType)=>book.id!==id)
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

    const addBook = (title:string, author:string, publish_date:string, edition:number) => {
        const lastBook = currentBookList.to(-1)
        const id = lastBook.to(0) + 1
        const bookToAdd = [id, title, author, publish_date, edition]
        setCurrentBookList(currentBookList + bookToAdd)
    }
    return <div className="bookList container">
        <div className="row">
    {
    currentBookList.map((currentBook:BookType, index:number)=> {
        const whichBook = editableBookList[currentBook.id]===true ?  <BookEdit key={currentBook.id} book={currentBook} deleteBook={deleteBook} updateBook={updateBook}/>:
        <Book key={currentBook.id} book={currentBook} deleteBook={deleteBook} editBook={editBook}/>;


        console.log(editableBookList[currentBook.id]===true)
        return <div className="col-md-4 mb-4">{whichBook}</div>
    }
    
    )}
    </div></div>}
export default BookListYavuz;