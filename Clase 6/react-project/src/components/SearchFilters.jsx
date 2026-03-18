import { useFilterHelp } from "../hooks/useFilterHelp";
import styles from "./SearchFilters.module.css";

export function SearchFilters( ) {
    const { helpText, handleFocus, handleBlur, handleMouseEnter, handleChange, handleMouseLeave } = useFilterHelp(styles);

    return (
        <div className={styles.dropDownWrapper}>
            <select 
                id="technology-filter" 
                name="technology" 
                defaultValue="" 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                onMouseEnter={handleMouseEnter}
                onChange={handleChange}
                onMouseLeave={handleMouseLeave}
                >
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
            <select 
                id="location-filter" 
                name="location" 
                defaultValue=""
                onFocus={handleFocus} 
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onChange={handleChange} 
                onMouseLeave={handleMouseLeave}>
                <option value="" >Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="barcelona">Barcelona</option>
                <option value="bsas">Buenos Aires</option>
            </select>
            <select 
                id="level-filter" 
                name="level" 
                defaultValue=""
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                onMouseEnter={handleMouseEnter}
                onChange={handleChange}
                onMouseLeave={handleMouseLeave}>
                <option value="" >Nivel de Experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
            </select>
            {helpText && <p className={styles.filtersHelp}>{helpText}</p>}
        </div>
    )
}