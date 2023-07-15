import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        onSubmit( term );
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} type="text" />
                {term}
            </form>
        </div>
    );
}

export default SearchBar;