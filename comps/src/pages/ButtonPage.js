import { GoAlert } from "react-icons/go";
import Button from '../components/Button';

const ButtonPage = () => {
    const handleClick = () => {
        console.log('clique');
    }

    const handleMouseHover = () => {
        console.log('mouse over');
    }


    return <div>
        <Button onClick={handleClick} className="mb-5" primary rounded><GoAlert />btn 1</Button>
        <Button onMouseEnter={handleMouseHover} secondary>btn 2</Button>
        <Button success>btn 3</Button>
        <Button warning>btn 4</Button>
        <Button danger>btn 5</Button>
    </div>
}

export default ButtonPage;