    //Components
    import { SearchInput } from "./SearchInput.jsx";
    import { SearchFilters } from "./SearchFilters.jsx";

    //Styles
    import styles from "./SearchBarSection.module.css";
    
    //Hooks
    import { useSearchForm } from "../hooks/useSearchForm.jsx";


    export function SearchBarSection({ onSearch }) {
        const { idSearch, handleSubmit } = useSearchForm(onSearch);

        return (
            <section className={styles.searchBar}>
                <h1>Encuentra tu próximo trabajo</h1> 
                <p>Explora miles de oportunidades en el sector técnologico.</p>
                <form  role="search" onSubmit={handleSubmit}>
                    <SearchInput idSearch={idSearch} />
                    <SearchFilters />
                </form>
            </section>
        );
    }

