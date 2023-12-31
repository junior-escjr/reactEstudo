import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const BookList = () => {
    const { books } = useContext( BooksContext );

    const renderBooks = books.map( (book) => {
        return <BookShow book={book} key={book.id} />;
    });

    return <div className="book-list">{renderBooks}</div>
}

export default BookList;