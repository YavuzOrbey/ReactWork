import BookTypeYavuz from "./BookTypeYavuz";


const Book = (props:any) => {

    const {title, author, publish_date, edition} = props.book;
    return <>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{author}</p>
        <p>{publish_date}</p>
        <p>{edition}</p>
        </>
}

export default Book;