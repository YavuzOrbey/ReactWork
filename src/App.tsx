import {booksData} from './books-data'
import './App.css';
import BookListYavuz from './BookListYavuz'
import AddBookFormYavuz from './AddBookFormYavuz';

function App(props:any) {
  return (<div className='container' style={{background: '#d1d1d1'}}>
    <AddBookFormYavuz />
    <BookListYavuz books={booksData} />
    </div>
  );
}

export default App;
