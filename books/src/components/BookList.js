import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
    const { count, incrementCount } = useContext( BooksContext );

    const renderBooks = books.map( (book) => {
        return <BookShow onDelete={onDelete} book={book} key={book.id} onEdit={onEdit} />;
    });

    return <div className='book-list'>
            {count}
            <button onClick={incrementCount}>click</button>
            {renderBooks}
        </div>
}

export default BookList;