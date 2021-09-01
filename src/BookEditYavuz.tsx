import BookTypeYavuz from "./BookTypeYavuz";
import "./BookYavuz.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const BookEdit = (props:any) => {

    const {id, title, author, publish_date, edition} = props.book;

    let ordinalNum:string[] = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];

    return (
    <div className="book">
        <div className='buttons' style={{float: "right"}}>
            <button onClick={() => props.deleteBook(id) }><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={() => props.updateBook(id) }><FontAwesomeIcon icon={faCheck} /></button>
        </div>
        <div className="book-bottom" />
        <div className="book-right" />
        <div className="content">
            <h2><input type="text" defaultValue={title} /></h2>
            <p><input type="text" defaultValue={author} /></p>
            <p>&#169; <input type="text" defaultValue={publish_date} /></p>
            <p>{<input type="number" defaultValue={edition} /> } edition</p>
        </div>
    </div>)
}

export default BookEdit;