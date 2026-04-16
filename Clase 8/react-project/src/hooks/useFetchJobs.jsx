//React
import { useState } from 'react'

export function useFetchJobs (searchTerm, filters) {
    const [ loading, setLoading ] = useState(true); 
    const [ jobsData, setJobsData ] = useState([]);
    const [ job, setJob] = useState(null);
    const [ error, setError ] = useState(null);
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

    async function fetchJobWithId(id) {
        try {
            setLoading(true);   

            const response = await fetch(
                `https://jscamp-api.vercel.app/api/jobs/${id}`
            )
            .then(response => {
                if(!response.ok) {
                    throw new Error("Job not found");
                }
                
                return response.json();
            })
            .then(json => {
                setJob(json);
            })
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        jobsData,
        job,
        total,
        loading,
        error,
        fetchJobs,
        fetchJobWithId
    }
}