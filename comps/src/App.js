import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
    const [selection, setSelection] = useState( null );

    const handleSelect = ( option ) => {
        setSelection( option );
    }

    const options = [
        {label: 'Blue', value: 'blue' },
        {label: 'Green', value: 'green' },
        {label: 'Red', value: 'red' },
    ];

    return <Dropdown options={options} value={selection} onChange={handleSelect} />;
}

export default App;