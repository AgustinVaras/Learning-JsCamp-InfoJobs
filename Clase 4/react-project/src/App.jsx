//React
import { useState } from "react";

//Componentes
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobListing from "./components/JobListing";
import JobsPagination from "./components/JobsPagination";

//Data
import jobsData from "./data/data.json";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

//Valido si el trabajo debe ser filtrado o no
const isFiltered = (job) => {
    const search = searchTerm.toLowerCase();
    const title = job.titulo.toLowerCase();

    if(!search.trim()) return true;

    return title.includes(search) ? true : false
}; 

  const filteredJobs = jobsData.filter((job) => {
    return isFiltered(job);
  });

  return (
    <>
        <main className="search-page">
            {/* HEADER */}
            <Header />
            {/* SEARCH BAR */}
            <SearchBar onSearchChange={setSearchTerm}/>
            {/* SEARCH RESULTS */}
            <section className="search-results">
              <h2 id="search-title">Resultados de búsqueda</h2>
              {/* JOB LISTINGS */}
              <JobListing jobs={filteredJobs}/>
            </section>  
            {/* PAGINATION */}
            <JobsPagination />
        </main>
        <footer>
            <small>&copy; 2025 DevJobs. Todos los derechos reservados</small>
        </footer>
    </>
  )
}

export default App
