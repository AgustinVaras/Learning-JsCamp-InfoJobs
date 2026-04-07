import { useEffect, useState } from "react";


export function useJobFilters() {
    //Set de estados
    const [ activeFilters, setActiveFilters ] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [ clearCount, setClearCount ] = useState(0);
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        level: ""
    });


    useEffect(() => {
        setActiveFilters(validateActiveFilters());
    }, [filters]);

    const validateActiveFilters= () => {

        if ( filters.technology ) return true;
        if ( filters.location ) return true;
        if ( filters.level ) return true;

        return false;
    };

    const clearFilters = () => {
        setFilters ({
            technology: "",
            location: "",
            level: ""
        });
        setSearchTerm("");
        setClearCount(prev => prev + 1);
        setActiveFilters(false);
    };

    const handleSearch = (newFilters) => {
        setSearchTerm(newFilters.search);
        setFilters(newFilters);
    };    

    return { 
        searchTerm,
        filters,
        activeFilters,
        clearCount,
        setActiveFilters,
        validateActiveFilters,
        clearFilters,
        handleSearch 
    };
};
