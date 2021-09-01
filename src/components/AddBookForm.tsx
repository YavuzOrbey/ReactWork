import '../style/AddBookForm.css'
import {useState} from 'react'
const AddBookForm = () => {
    const [book, setBook] = useState({});
    function handleSubmit(){
        setBook({})
    }

    return <form className="add-book" onSubmit={handleSubmit}>
        <p>Add New Book</p>
        <label>Title</label>
        <input type="text" className="form-control" placeholder="Title"/>
        <label>Author</label>
        <input type="text"  className="form-control" placeholder="Author" />
        <label>Published Date</label>
        <input type="text" className="form-control" placeholder="Published Date" />
        <label>Edition</label>
        <input type="number" className="form-control" placeholder="Edition" />
        </form>
}

export default AddBookForm;