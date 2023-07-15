import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderItems = items.map( (item, key) => {
        return(
            <div key={key}>
                <h3 className="flex p-3 items-center justify-between cursor-pointer border-b bg-gray-50" onClick={() => setExpandedIndex( key )}>
                    { item.label }
                    <span className="text-xl">{key === expandedIndex ? <GoChevronDown /> : <GoChevronRight />}</span>
                </h3>
                {key === expandedIndex && <p className="border-b p-5">{ item.content }</p>}
            </div>
        );
    });


    return <div className="border-x border-t rounded">{renderItems}</div>
}

export default Accordion;