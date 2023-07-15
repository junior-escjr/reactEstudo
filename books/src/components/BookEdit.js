import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = ( e ) => {
        setTitle( e.target.value );
    }

    const handleEditSubmit = ( e ) => {
        e.preventDefault();

        onSubmit( book.id, title );
    }

    return <form onSubmit={handleEditSubmit} className="book-edit">
        <label htmlFor="">Title</label>
        <input type="text" className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">save</button>
    </form>
}

export default BookEdit;