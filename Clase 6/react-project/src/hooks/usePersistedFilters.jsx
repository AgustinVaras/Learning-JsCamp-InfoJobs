import { useEffect, useState } from "react";

export function usePersistedFilters(key, initialValue) {
    const [ filters, setFilters ] = useState(() => {
        const storedFilters = localStorage.getItem(key);
        return storedFilters ? JSON.parse(storedFilters) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(filters));
    }, [filters]);

    const clearPersistedFilters = () => {
        setFilters(initialValue);
        localStorage.removeItem(key);
    };

    return [
        filters, 
        setFilters,
        clearPersistedFilters
    ];
}