//React
import { use, useState } from "react";

//Componentes
import { Header } from "./components/Header.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { JobsListing } from "./components/JobListing.jsx";
import { JobsPagination } from "./components/JobsPagination.jsx";

//Data
import jobsData from "./data/data.json";

export function App() {

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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleChangePage = (page) => { 
    console.log("Cambiando a página: ", page);
    setCurrentPage(page);
  }

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
              <JobsListing jobs={filteredJobs}/>
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
