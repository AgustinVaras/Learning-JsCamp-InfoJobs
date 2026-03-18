//React
import { useState } from "react";

//Componentes
import { SearchBarSection } from "../components/SearchBarSection.jsx";
import { JobsListing } from "../components/JobListing.jsx";
import { JobsPagination } from "../components/JobsPagination.jsx";

//Data
import jobsData from "../data/data.json";

//Constantes
const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  //Set de estados
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    level: ""
  })
  //----------------------------------------------------------------------------- 
  //Valido si el trabajo debe ser filtrado o no
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
  }
  //-----------------------------------------------------------------------------
  //Filtro el listado de trabajos
  const jobsFiltered = jobsData
    .filter((job) => matchesFilters(job))
    .filter((job) => matchesText(job));
  //-----------------------------------------------------------------------------
  //Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsFiltered.length / RESULTS_PER_PAGE);
  const paginatedJobs = jobsFiltered.slice(
    (currentPage - 1 ) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  //-----------------------------------------------------------------------------
  //Handlers
  const handleChangePage = (page) => { 
    setCurrentPage(page);
  } 
  const handleSearch = (newFilters) => {
    setSearchTerm(newFilters.search);
    setFilters(newFilters);
    setCurrentPage(1);
  }
  //-----------------------------------------------------------------------------
  return (
    <main className="search-page">
        <SearchBarSection onSearch={handleSearch}/>
        <section className="search-results">
          <h2 id="search-title">Resultados de búsqueda</h2>
          <JobsListing jobs={paginatedJobs}/>
        </section>  
        <JobsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage}/>
    </main>
  )
}


