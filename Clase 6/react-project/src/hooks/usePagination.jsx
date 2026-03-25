import { useState, useMemo } from "react";

export function usePagination(data, itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);
    

    const paginatedData = useMemo(() => {
            return data.slice(
                (currentPage - 1 ) * itemsPerPage,
                currentPage * itemsPerPage
            );
        }, [data, currentPage, itemsPerPage]
    );

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const resetPage = () => {
        setCurrentPage(1);
    };

    return { 
        currentPage, 
        totalPages, 
        paginatedData, 
        goToPage,
        resetPage 
    };
};