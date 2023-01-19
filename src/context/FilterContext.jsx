import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState();

    return <FilterContext.Provider value={{ activeFilter, setActiveFilter }} >{children}</FilterContext.Provider> 
}

export default FilterProvider;
