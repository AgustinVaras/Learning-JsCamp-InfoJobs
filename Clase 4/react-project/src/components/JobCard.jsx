function JobCard ({ job }) {
    return (
        <article className="job-card">
            <div>
                <h3>{job.titulo}</h3>
                <p><small className="job-list-details">{job.empresa} | {job.ubicacion}</small></p>
                <p className="job-list-paragraph">{job.descripcion}</p>
            </div>
            <button id="btn-1" className="btn-apply">Aplicar</button>
        </article>
    )
}

export default JobCard;