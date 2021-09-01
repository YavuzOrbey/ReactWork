import BookTypeYavuz from "./BookTypeYavuz";
import "./BookYavuz.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const Book = (props:any) => {

    const {id, title, author, publish_date, edition} = props.book;

    let ordinalNum:string[] = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];

    return (
    <div className="book">
        <div className='buttons' style={{float: "right"}}>
            <button onClick={() => props.deleteBook(id) }><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={() => props.editBook(id) }><FontAwesomeIcon icon={faEdit} /></button>
        </div>
        <div className="book-bottom" />
        <div className="book-right" />
        <div className="content">
            <h2>{title}</h2>
            <p>{author}</p>
            <p>&#169; {publish_date}</p>
            <p>{`${ordinalNum[edition-1]} edition`}</p>
        </div>
    </div>)
}

export default Book;