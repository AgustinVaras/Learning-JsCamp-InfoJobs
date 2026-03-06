import { useState } from "react";

export function JobCard ({ job }) {

    const [isApplied, setIsApplied] = useState(false);

    const handleApplyChange = () => {
        setIsApplied(true);
    }

    const btnClass =  isApplied ? "is-applied btn-apply" : "btn-apply";
    const btnText = isApplied ? "Aplicado" : "Aplicar";

    return (
        <article className="job-card">
            <div>
                <h3>{job.titulo}</h3>
                <p><small className="job-list-details">{job.empresa} | {job.ubicacion}</small></p>
                <p className="job-list-paragraph">{job.descripcion}</p>
            </div>
            <button id="btn-1" className={btnClass} onClick={handleApplyChange}>{btnText}</button>
        </article>
    )
}

