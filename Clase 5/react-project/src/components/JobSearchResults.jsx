import JobListing from "./JobListing.jsx";
function JobSearchResults() { 
    return (
        <section class="search-results">
            <h2 id="search-title">Resultados de búsqueda</h2>
                {/* JOB LISTINGS */}
                <JobListing />
        </section>
    );
}

export default JobSearchResults;