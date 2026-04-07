import { useEffect, useState } from "react";
import { usePersistedFilters } from "./usePersistedFilters.jsx";


export function useJobFilters() {
    //Set de estados
    const [ activeFilters, setActiveFilters ] = useState(false);
    const [ searchTerm, setSearchTerm, clearPersistedSearchTerm ] = usePersistedFilters("jobSearchTerm", "");
    const [ clearCount, setClearCount ] = useState(0);
    const [filters, setFilters, clearPersistedFilters] = usePersistedFilters( "jobFilters" ,{
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
        if ( searchTerm ) return true;

        return false;
    };

    const clearFilters = () => {
        clearPersistedSearchTerm(); 
        clearPersistedFilters();
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
