import JobCard from './JobCard';
import { jobData } from '@/data/jobs';

export default function JobList() {
  return (
    <div className="space-y-4">
      {jobData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}