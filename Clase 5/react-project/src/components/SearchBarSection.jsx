import { SearchInput } from "./SearchInput.jsx";
import { SearchFilters } from "./SearchFilters.jsx"

import styles from "./SearchBar.module.css";

export function SearchBarSection({ onSearchChange }) {
    
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    }

    return (
        <section className={styles.searchBar}>
            <h1>Encuentra tu próximo trabajo</h1> 
            <p>Explora miles de oportunidades en el sector técnologico.</p>
            <form role="search">
                <SearchInput onSearchChange={handleChange} />
                <SearchFilters />
            </form>
        </section>
    );
}

