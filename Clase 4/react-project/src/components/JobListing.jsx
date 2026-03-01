import JobCard from "./JobCard";

function JobsListing ({ jobs }) {
    return (
        <div className="job-listing">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))} 
        </div>
    );
}

export default JobsListing;