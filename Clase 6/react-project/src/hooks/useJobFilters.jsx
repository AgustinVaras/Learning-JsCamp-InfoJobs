import { useState, useMemo } from "react";


export function useJobFilters(jobsData) {
    //Set de estados
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        level: ""
    })

    const matchesText = (job) => {
        const search = searchTerm.toLowerCase();
        const title = job.titulo.toLowerCase(); 
        if(!search) return true;  
        return title.includes(search);
    };

    const matchesFilters = (job) => {
        const { technology, modalidad, nivel } = job.data;  
        if(filters.technology && !technology?.includes(filters.technology.toLowerCase())) return false;
        if(filters.level && !nivel?.includes(filters.level.toLowerCase())) return false;
        if(filters.location && !modalidad?.includes(filters.location.toLowerCase())) return false;  
        return true;
    };  

    const filteredJobs = useMemo (() => {
        return jobsData
        .filter((job) => matchesFilters(job))
        .filter((job) => matchesText(job));
    }, [jobsData, filters, searchTerm]);


    const handleSearch = (newFilters) => {
        setSearchTerm(newFilters.search);
        setFilters(newFilters);
        setCurrentPage(1);
    };    

    return { 
        filteredJobs, 
        handleSearch 
    };
};
