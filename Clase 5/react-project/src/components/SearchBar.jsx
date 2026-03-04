function SearchBar({ onSearchChange }) {
    
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    }

    return (
        <section className="search-bar">
            <h1>Encuentra tu próximo trabajo</h1> 
            <p>Explora miles de oportunidades en el sector técnologico.</p>
            <form role="search">
                <div className="input-wrapper">
                    <svg  
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"  
                        height="24"  
                        viewBox="0 0 24 24"  
                        fill="none"  
                        stroke="currentColor"  
                        stroke-width="2"  
                        stroke-linecap="round"  
                        stroke-linejoin="round"  
                        className="input-icon icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path 
                        stroke="none" 
                        d="M0 0h24v24H0z" 
                        fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>  
                    <input 
                        id="search-input" 
                        type="text" 
                        placeholder="Buscar trabajos, empresas o habilidades" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="dropwdown-wrapper">
                    <select id="technology-filter" className="job-filter">
                        <option value="" disabled selected>Tecnología</option>
                        <option value="javaScript">JavaScript</option>
                        <option value="react">React</option>
                        <option value="node">Nojde.js</option>
                        <option value="sql">SQL</option>
                        <option value="python">Python</option>
                        <option value="swift">Swift</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="aws">AWS</option>
                        <option value="azure">Azure</option>
                        <option value="gcp">GCP</option>
                    </select>
                    <select id="location-filter" className="job-filter">
                        <option value="" disabled selected>Ubicación</option>
                        <option value="remoto">Remoto</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="bsas">Buenos Aires</option>
                    </select>
                    <select id="contract-filter" className="job-filter">
                        <option value="" disabled selected>Tipo de contrato</option>
                        <option value="fullTime">Full-Time</option>
                        <option value="partTime">Part-Time</option>
                    </select>
                    <select id="level-filter" className="job-filter">
                        <option value="" disabled selected>Nivel de Experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="mid-level">Mid-Level</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
            </form>
        </section>
    );
}

export default SearchBar;