    import { SearchInput } from "./SearchInput.jsx";
    import { SearchFilters } from "./SearchFilters.jsx"
    import { useId} from "react";

    import styles from "./SearchBar.module.css";

    export function SearchBarSection({ onSearchChange, onSearch }) {
        //Declaro id para el input de búsqueda 
        const idSearch = useId();
        

        const handleChange = (event) => {
            onSearchChange(event);
        }

        const handleSubmit = (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);

            const filters = {
                search: formData.get(idSearch),
                technology: formData.get("technology"),
                location: formData.get("location"),
                contract: formData.get("contract"),
                level: formData.get("level")
            }
            console.log(filters);
            onSearch(filters);
        }


        return (
            <section className={styles.searchBar}>
                <h1>Encuentra tu próximo trabajo</h1> 
                <p>Explora miles de oportunidades en el sector técnologico.</p>
                <form role="search" onSubmit={handleSubmit}>
                    <SearchInput onSearchChange={handleChange} idSearch={idSearch} />
                    <SearchFilters />
                </form>
            </section>
        );
    }

