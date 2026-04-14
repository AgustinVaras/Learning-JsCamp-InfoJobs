//Librerias
import snarkdown from "snarkdown";

//Hooks
import { useParams } from "react-router";
import { useEffect } from "react";
import { useFetchJobs } from "../hooks/useFetchJobs.jsx";

//Componentes
import { Spinner } from "../components/Spinner.jsx";
import { Link } from "../components/Link.jsx";

import styles from "./Detail.module.css";

export function JobTitle ({ title, company, location }) {
    return (
        <section className={styles.jobTitle}>
            <div>
                <h1>{title}</h1>
                <small>{company} - {location}</small>
            </div>
            <button className={styles.btnApplyLarge}>Aplicar ahora</button>
        </section>
    );
};

export function JobSection ({ title, content, className = "" }) {
    const html = snarkdown(content ?? "");
    return (
        <section className={className}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: html }} />
        </section>
    )
};

export default  function Detail () {
    const { id } = useParams();
    const { fetchJobWithId, loading, job, error } = useFetchJobs();


    useEffect(() => {
        fetchJobWithId(id);
        
    }, [id]);


    if ( loading ) {
        return(
            <div className="loading-container">
                <Spinner />
                <p>Cargando ofertas de trabajo...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error</h2>
                <p>{error}</p>
                <a href="../search">Volver a la búsqueda</a>
            </div>
        );
    }

    return (
        <main>
            <nav className={styles.jobRoute}>
                <div>
                    <Link href="../search">Empleos</Link><p>/</p><a>{job.titulo}</a>
                </div>
            </nav>
            <article className={styles.jobDetail}>
                <div>
                    
                    <JobTitle title={job.titulo} company={job.empresa} location={job.ubicacion}/>
                    
                    {/* <JobDescription description={job.descripcion}/> */}
                    <JobSection title="Descripción del puesto" content={'<p>' + job.content.description + '</p>'} className={styles.jobDescription}/>
                    <JobSection title="Responsabilidades" content={job.content.responsibilities}/>
                    <JobSection title="Requisitos" content={job.content.requirements}/>
                    <JobSection title="Acerca de la empresa" content={job.content.about}/>
                    <hr/>
                    <div className={styles.bottomBtnWrapper} >
                        <button id= "inferior-btn" className={styles.btnApplyLarge}>Aplicar ahora</button>
                    </div>
                </div>
            </article>
        </main>
    );
};