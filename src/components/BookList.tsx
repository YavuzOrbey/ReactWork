import React, {useState} from 'react'
import Book from "./Book"
import BookType from "../types/BookType";
import BookEdit from "./EditBook";
import  '../style/BookList.css';
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
    const deleteAllBooks = () => {
        setCurrentBookList([])
    }
    const editBook = (id:number) => {
        let newEditableBookList = {...editableBookList}
        newEditableBookList[id] = true;
        console.log(editableBookList)
        setEditableBookList(newEditableBookList)
    }

    const addBook = () => {
            // get the  inputs title author

            //create object from that form
            const newBookList = [...currentBookList, {id: 10, title: "How to Rule the World", author: "dr. doom", publish_date: "3/32/21", edition: 9}]
            setCurrentBookList(newBookList)
    }

    const updateBook = (id:number) => {
        let newEditableBookList = {...editableBookList}
        newEditableBookList[id] = false;
        setEditableBookList(newEditableBookList)
    }
    return <> <button onClick={() => deleteAllBooks()} >Delete All Books</button>
    <button onClick={() => addBook()}>Add Book</button>
    <div className="bookList container">
       
        <div className="row">
    {
    currentBookList.map((currentBook:BookType, index:number)=> {
        const whichBook = editableBookList[currentBook.id]===true ?
        <BookEdit key={currentBook.id} book={currentBook} deleteBook={deleteBook} updateBook={updateBook}/>:
        <Book key={currentBook.id} book={currentBook} deleteBook={deleteBook} editBook={editBook}/>;
        return <div className="col-md-4 mb-4">{whichBook}</div>
    }
    
    )}
    </div></div></>}
export default BookListYavuz;