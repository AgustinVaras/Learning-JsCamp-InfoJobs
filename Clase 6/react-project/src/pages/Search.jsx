//Componentes
import { SearchBarSection } from "../components/SearchBarSection.jsx";
import { JobsListing } from "../components/JobListing.jsx";
import { JobsPagination } from "../components/JobsPagination.jsx";
import { Spinner } from "../components/Spinner.jsx";
import { NoResults } from "../components/NoResults.jsx";

//Data
// import jobsData from "../data/data.json";

//Hooks
import { useFetchJobs } from "../hooks/useFetchJobs.jsx";
import { useJobFilters } from "../hooks/useJobFilters.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { useRouter } from "../hooks/useRouter.jsx";
import { useEffect } from "react";

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  //Hooks calls
  const { navigateTo } = useRouter();
  const { 
    jobsData, 
    total,
    loading, 
    fetchJobs 
  } = useFetchJobs();

  const { 
    searchTerm,
    filters,
    activeFilters,
    clearCount,
    clearFilters,
    handleSearch 
  } = useJobFilters();

  const { 
    currentPage, 
    totalPages, 
    goToPage,
    resetPage 
  } = usePagination(jobsData, total, RESULTS_PER_PAGE);
  //---------------------------------------------------------------------------------------------------------------
  //Functions
  const buildApiQuery = (searchTerm, filters) => {
    const params = new URLSearchParams();

    if (searchTerm) params.append("text", searchTerm);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.location) params.append("type", filters.location);
    if (filters.level) params.append("level", filters.level);

    const offset = ( currentPage - 1 ) * RESULTS_PER_PAGE;
    params.append('limit', RESULTS_PER_PAGE);
    params.append('offset', offset);

    return params.toString();
  }

  const buildUrlQuery = (searchTerm, filters) => {
    const params = new URLSearchParams();

    if (searchTerm) params.append("text", searchTerm);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.location) params.append("type", filters.location);
    if (filters.level) params.append("level", filters.level);

    if ( currentPage > 1 ) {
      params.append('page', currentPage);
    }

    return params.toString();
  }
  //---------------------------------------------------------------------------------------------------------------
  //Effects
  useEffect(() => {
    const query = buildApiQuery(searchTerm, filters);
    fetchJobs(query);
  }, [searchTerm, filters, currentPage]);

  useEffect(() => {
    const newUrl = buildUrlQuery(searchTerm, filters) 
      ? `${ window.location.pathname }?${buildUrlQuery(searchTerm, filters)}`
      : window.location.pathname;

    console.log("Navegando a:", newUrl);
    navigateTo(newUrl);
  }, [searchTerm, filters, currentPage]);
  //---------------------------------------------------------------------------------------------------------------
  //Handles
  const handleSearchWithReset = (filters) => {
    handleSearch(filters); 
    resetPage();
  }

  return (
    <main className="search-page">
      <SearchBarSection 
        filters={filters}
        onSearch={handleSearchWithReset} 
        clearCount={clearCount}
        activeFilters={activeFilters} 
        onClearFilters={clearFilters}
        searchTerm={searchTerm}
      />
      <section className="search-results">
        {
          loading 
          ? (
            <div className="loading-container">
                <Spinner />
                <p>Cargando ofertas de trabajo...</p>
              </div>
            ) 
            : (
              jobsData.length === 0
              ? (
                <NoResults/>
              ) : (
                <>
                  <h2 id="search-title">Resultados de búsqueda</h2>
                  <JobsListing jobs={jobsData}/>
                </>
              )
            )
          
        }
      </section>
      {
        jobsData.length > 0 
        ? (  
          <JobsPagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={goToPage}
          />
        ) 
        : (null)
      }
    </main>
  )
};


