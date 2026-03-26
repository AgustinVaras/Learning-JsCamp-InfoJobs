//Componentes
import { SearchBarSection } from "../components/SearchBarSection.jsx";
import { JobsListing } from "../components/JobListing.jsx";
import { JobsPagination } from "../components/JobsPagination.jsx";

//Data
// import jobsData from "../data/data.json";

//Hooks
import { useFetchJobs } from "../hooks/useFetchJobs.jsx";
import { useJobFilters } from "../hooks/useJobFilters.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { useEffect } from "react";

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  
  const { 
    jobsData, 
    loading, 
    fetchJobs 
  } = useFetchJobs();

  const { 
    searchTerm,
    filters,
    handleSearch 
  } = useJobFilters();

  const { 
    currentPage, 
    totalPages, 
    paginatedData, 
    goToPage,
    resetPage 
  } = usePagination(jobsData, RESULTS_PER_PAGE);
    
  const buildQuery = (searchTerm, filters) => {
    const params = new URLSearchParams();

    if (searchTerm) params.append("text", searchTerm);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.location) params.append("type", filters.location);
    if (filters.level) params.append("level", filters.level);

    return params.toString();
  }
  
  useEffect(() => {
    const query = buildQuery(searchTerm, filters);
    fetchJobs(query);
  }, [searchTerm, filters]);

  const handleSearchWithReset = (filters) => {
    handleSearch(filters); 
    resetPage();
  }

  return (
    <main className="search-page">
      <SearchBarSection onSearch={handleSearchWithReset}/>
      <section className="search-results">
        <h2 id="search-title">Resultados de búsqueda</h2>
        <JobsListing jobs={paginatedData}/>
      </section>  
      <JobsPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={goToPage}
      />
    </main>
  )
};


