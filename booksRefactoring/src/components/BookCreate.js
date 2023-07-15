import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const { createBook } = useContext( BooksContext );

    const handleChange = ( e ) => {
        setTitle(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        createBook( title );
        setTitle('');

        console.log( title )
    }

    return <div className="book-create">
        <h3>Add book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input className="input" type="text" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate;