import { useState } from 'react';
import AnimalShow from './AnimalShow';

import 'bulma/css/bulma.css';
import './App.scss';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

console.log( getRandomAnimal() );

const App = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderAnimals = animals.map(( animal, index ) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app'>
            <button onClick={handleClick}>Add animal</button>
            <div>{renderAnimals}</div>
        </div>
    );
}

export default App;