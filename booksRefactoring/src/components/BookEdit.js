import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext( BooksContext );

    const handleChange = ( e ) => {
        setTitle( e.target.value );
    }

    const handleEditSubmit = ( e ) => {
        e.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    }

    return <form onSubmit={handleEditSubmit} className="book-edit">
        <label htmlFor="">Title</label>
        <input type="text" className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">save</button>
    </form>
}

export default BookEdit;