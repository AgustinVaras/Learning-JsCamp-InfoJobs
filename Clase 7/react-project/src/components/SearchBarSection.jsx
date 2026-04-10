    //Components
    import { SearchInput } from "./SearchInput.jsx";
    import { SearchFilters } from "./SearchFilters.jsx";

    //Styles
    import styles from "./SearchBarSection.module.css";
    
    //Hooks
    import { useSearchForm } from "../hooks/useSearchForm.jsx";


    export function SearchBarSection({ onSearch, activeFilters, clearCount, onClearFilters, filters, searchTerm }) {
        const { idSearch, handleSubmit } = useSearchForm(onSearch);

        return (
            <section className={styles.searchBar}>
                <h1>Encuentra tu próximo trabajo</h1> 
                <p>Explora miles de oportunidades en el sector técnologico.</p>
                <form  role="search" onSubmit={handleSubmit} key={clearCount}>
                    <SearchInput idSearch={idSearch} searchTerm={searchTerm} />
                    <SearchFilters activeFilters={activeFilters} onClearFilters={onClearFilters} filters={filters}/>
                </form>
            </section>
        );
    }

