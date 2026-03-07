import styles from "./SearchFilters.module.css";
import { useId } from "react";

// idTechnology, idLocation, idContract, idLevel

export function SearchFilters( ) {
    
    return (
        <div className={styles.dropDownWrapper}>
            <select id="technology-filter" name="technology" defaultValue="" >
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
            <select id="location-filter" name="location" defaultValue="">
                <option value="" >Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="barcelona">Barcelona</option>
                <option value="bsas">Buenos Aires</option>
            </select>
            {/* <select id="contract-filter" name="contract" defaultValue="">
                <option value="" disabled >Tipo de contrato</option>
                <option value="fullTime">Full-Time</option>
                <option value="partTime">Part-Time</option>
            </select> */}
            <select id="level-filter" name="level" defaultValue="">
                <option value="" >Nivel de Experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
            </select>
        </div>
    )
}