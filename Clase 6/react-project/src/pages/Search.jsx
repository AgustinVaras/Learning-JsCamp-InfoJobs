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

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  const { jobsData, loading } = useFetchJobs();

  const { filteredJobs, handleSearch } = useJobFilters(jobsData);
  
  const { 
    currentPage, 
    totalPages, 
    paginatedData, 
    goToPage,
    resetPage 
  } = usePagination(filteredJobs, RESULTS_PER_PAGE);
  
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


