type Book = {
    id: number,
    title: string,
    author: string,
    publish_date: string,
    edition: number,
}


const Testing = (props:object) => {
    
    const {books} = props;
    const deleteBook = (id:number) => {
        return books.filter((book:Book)=> book.id!=id)
    }

    return <button onClick={() => deleteBook(2)}>Delete Book</button>

}