import {booksData} from '../books-data'
import '../style/App.css';
import BookList from './BookList'
import AddBookForm from './AddBookForm';

function App(props:any) {
  return (<div className='container' style={{background: '#d1d1d1'}}>
    <AddBookForm />
    <BookList books={booksData} />
    </div>
  );
}

export default App;
