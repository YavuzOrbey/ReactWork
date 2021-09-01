import './AddBookFormYavuz.css'
const AddBookForm = () => {


    return <form className="add-book">
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