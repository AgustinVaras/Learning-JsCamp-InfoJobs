import { useState } from "react";


export function useJobFilters() {
    //Set de estados
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        level: ""
    });


    const handleSearch = (newFilters) => {
        setSearchTerm(newFilters.search);
        setFilters(newFilters);
    };    

    return { 
        searchTerm,
        filters,
        handleSearch 
    };
};
