//React
import { useState } from 'react'

export function useFetchJobs (searchTerm, filters) {
    const [ loading, setLoading ] = useState(true); 
    const [ jobsData, setJobsData ] = useState([]);
    const [ total, setTotal ] = useState(0);
    
    
    async function fetchJobs(query) {
        try {
            setLoading(true);

            const response = await fetch(
                `https://jscamp-api.vercel.app/api/jobs${query ? `?${query}`: ""}`
            );

            const json = await response.json(); 
            
            setJobsData(json.data);
            setTotal(json.total);

        } catch (error) {
            console.error('Error fetching jobs: ', error);
        } finally {
            setLoading(false);
        }
    };  

    return {
        jobsData,
        total,
        loading,
        fetchJobs
    }
}