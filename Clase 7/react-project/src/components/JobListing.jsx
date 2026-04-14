import { JobCard } from "./JobCard.jsx";

import styles from "./JobListing.module.css";

export function JobsListing ({ jobs }) {
    return (
        <div className={styles.jobListing}>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))} 
        </div>
    );
}

