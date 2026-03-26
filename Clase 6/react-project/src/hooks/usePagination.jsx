import { useState, useMemo } from "react";

export function usePagination(data, total, itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(total / itemsPerPage);
    

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const resetPage = () => {
        setCurrentPage(1);
    };

    return { 
        currentPage, 
        totalPages, 
        goToPage,
        resetPage 
    };
};