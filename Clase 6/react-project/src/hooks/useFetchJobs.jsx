//React
import { useState, useEffect } from 'react'

export function useFetchJobs () {
    const [ loading, setLoading ] = useState(true); 
    const [ jobsData, setJobsData ] = useState([]);
    const [ total, setTotal ] = useState(0);
    
    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const response = await fetch('https://jscamp-api.vercel.app/api/jobs');
                const json = await response.json(); 
                
                setJobsData(json.data);
                setTotal(json.total);

            } catch (error) {
                console.error('Error fetching jobs: ', error);
            } finally {
                setLoading(false);
            }
        };  

        fetchJobs();
    }, []);

    return {
        jobsData,
        total,
        loading
    }
}