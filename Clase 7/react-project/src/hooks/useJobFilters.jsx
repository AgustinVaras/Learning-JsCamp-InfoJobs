import { useEffect, useState } from "react";
import { usePersistedFilters } from "./usePersistedFilters.jsx";
import { useRouter } from "./useRouter.jsx";



export function useJobFilters() {
    const [ searchTerm, setSearchTerm, clearPersistedSearchTerm ] = usePersistedFilters("jobSearchTerm", (() => {
        const params = new URLSearchParams(window.location.search);
        return params.get("text") || "";
    })());
    const [filters, setFilters, clearPersistedFilters] = usePersistedFilters( "jobFilters" ,{
        technology: "",
        location: "",
        level: ""
    });
    const [ activeFilters, setActiveFilters ] = useState(false);
    const [ clearCount, setClearCount ] = useState(0);
    

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
