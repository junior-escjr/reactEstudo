import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

const BookShow = ({ book }) => {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext( BooksContext );

    const handleDeleteClick = () => {
        deleteBookById( book.id );
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit( false );
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="book" />

        {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}

        <div className="actions">
            <button className="edit" onClick={handleEditClick}></button>
            <button className="delete" onClick={handleDeleteClick}></button>
        </div>
    </div>
}

export default BookShow;