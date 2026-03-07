//React
import { use, useState } from "react";

//Componentes
import { Header } from "./components/Header.jsx";
import { SearchBarSection } from "./components/SearchBarSection.jsx";
import { JobsListing } from "./components/JobListing.jsx";
import { JobsPagination } from "./components/JobsPagination.jsx";

//Data
import jobsData from "./data/data.json";

const RESULTS_PER_PAGE = 5;

export function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    level: ""
  })

  const activeFiltersValidation = (filters) => {
    const values = Object.values(filters);
    return values.some(value => value?.trim() !== '');
  }

  //Valido si el trabajo debe ser filtrado o no
  const isFilteredbyText = (job) => {
      const search = searchTerm.toLowerCase();
      const title = job.titulo.toLowerCase();

      if(!search.trim()) return true;

      return title.includes(search) ? true : false
  }; 

  const isFilteredByFilters = (job) => {
    const { technology, modalidad, nivel } = job.data;
    // console.log("Filtros activos: ", filters);
    if(!activeFiltersValidation(filters)) return true;

    if(filters.technology && !technology?.includes(filters.technology.toLowerCase())) return false;
    if(filters.level && !nivel?.includes(filters.level.toLowerCase())) return false;
    if(filters.location && !modalidad?.includes(filters.location.toLowerCase())) return false;

    return true;
  }

  const filteredJobsbyFilters = jobsData.filter((job) => {
    return isFilteredByFilters(job);
  });

  const jobsFiltered = filteredJobsbyFilters.filter((job) => {
    return isFilteredbyText(job);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsFiltered.length / RESULTS_PER_PAGE);
  const pagedResults = jobsFiltered.slice(
    (currentPage - 1 ) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handleTextChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  const handleChangePage = (page) => { 
    console.log("Cambiando a página: ", page);
    setCurrentPage(page);
  }

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }

  return (
    <>
        {/* HEADER */}
        <Header />
        <main className="search-page">
            {/* SEARCH BAR */}
            <SearchBarSection onSearchChange={handleTextChange} onSearch={handleSearch}/>
            {/* SEARCH RESULTS */}
            <section className="search-results">
              <h2 id="search-title">Resultados de búsqueda</h2>
              {/* JOB LISTINGS */}
              <JobsListing jobs={pagedResults}/>
            </section>  
            {/* PAGINATION */}
            <JobsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage}/>
        </main>
        <footer>
            <small>&copy; 2025 DevJobs. Todos los derechos reservados</small>
        </footer>
    </>
  )
}

export default App
