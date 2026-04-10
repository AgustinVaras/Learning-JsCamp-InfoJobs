import { useState, useMemo } from "react";

export function usePagination(data, total, itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const page = Number(params.get("page")) || 1;
        return !Number.isNaN(page) ? page : 1;
    });
    
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