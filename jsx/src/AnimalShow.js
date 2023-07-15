import { useState } from "react";

import heart from './svg/heart.svg';

import './AnimalShow.scss';

const AnimalShow = ({type}) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks( clicks + 1 );
    }

    return (
        <div onClick={handleClick}>
            <img src={require(`./svg/${type}.svg`)} alt={type} />
            <img src={heart} alt="heart" style={{width: 10 + 10 * clicks + 'px'}} />
        </div>
    );
}

export default AnimalShow;