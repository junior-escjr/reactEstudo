import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
    const [selection, setSelection] = useState( null );

    const handleSelect = ( option ) => {
        setSelection( option );
    }

    const options = [
        {label: 'Blue', value: 'blue' },
        {label: 'Green', value: 'green' },
        {label: 'Red', value: 'red' },
    ];

    return (
        <div className="flex"> 
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage;