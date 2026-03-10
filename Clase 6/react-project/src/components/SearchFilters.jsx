import { useState } from "react"; 
import styles from "./SearchFilters.module.css";

export function SearchFilters( ) {
    const [helpText, setHelptext] = useState("");
    
    const handleFocus = (event) => {
        const filterName = event.target.name;
        let helpMessage = "";
        switch (filterName){
            case "technology" : 
                helpMessage = "Selecciona una tecnología para filtrar los resultados de búsqueda.";
                break;
            case "location" :
                helpMessage = "Selecciona una ubicación para filtrar los resultados de búsqueda.";
                break;
            case "level" :
                helpMessage = "Selecciona un nivel de experiencia para filtrar los resultados de búsqueda.";
                break;   
        }
        event.target.classList.add(styles.isFocused);
        setHelptext(helpMessage);
    }

    const handleBlur = (event) => {
        event.target.classList.remove(styles.isFocused);
        setHelptext("");
    }

    return (
        <div className={styles.dropDownWrapper}>
            <select onFocus={handleFocus} onBlur={handleBlur} id="technology-filter" name="technology" defaultValue="" >
                <option value="" >Tecnología</option>
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
            <select onFocus={handleFocus} onBlur={handleBlur} id="location-filter" name="location" defaultValue="">
                <option value="" >Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="barcelona">Barcelona</option>
                <option value="bsas">Buenos Aires</option>
            </select>
            <select onFocus={handleFocus} onBlur={handleBlur} id="level-filter" name="level" defaultValue="">
                <option value="" >Nivel de Experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
            </select>
            {helpText && <p className={styles.filtersHelp}>{helpText}</p>}
        </div>
    )
}