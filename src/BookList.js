import Book from './Book';

function BookList(props) {
    const bookData = props.bookData;
  
    const bookElements = [];
  
    for(let i = 0; i < bookData.length; i++) {
      const book = bookData[i];
  
      bookElements.push(
        <Book title={book.title} message={book.author} />
      )
    }
  
    return (
      <div>
        {bookElements}
      </div>
    );
  }
  
  export default BookList;