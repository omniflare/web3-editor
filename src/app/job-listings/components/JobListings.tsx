'use client'

import { useReadContract } from "thirdweb/react";
import { useState, useEffect } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants/contractInfo';

type Job = {
  id: number;
  owner: string;
  companyName: string;
  salary: number;
  workHours: number;
  role: string;
  skillsRequired: string;
  education: string;
  jobDescription: string;
  jobTask: string;
  isOpen: boolean;
  timestamp: number;
};

export function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const { data, isLoading, error } = useReadContract({
    contract: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    method: "getAllJobs",
    params: [],
  });

  useEffect(() => {
    if (data) {
      setJobs(data as Job[]);
    }
  }, [data]);

  if (isLoading) return <div>Loading job listings...</div>;
  if (error) return <div>Error loading job listings: {error.message}</div>;

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">{job.role}</h2>
          <p className="text-gray-600">{job.companyName}</p>
          <p>Salary: ${job.salary}</p>
          <p>Work Hours: {job.workHours} hours/week</p>
          <p>Skills Required: {job.skillsRequired}</p>
          <p>Education: {job.education}</p>
          <p className="mt-2">{job.jobDescription}</p>
          <p className="mt-2 font-semibold">Key Tasks: {job.jobTask}</p>
          <p className="mt-2 text-sm text-gray-500">
            Posted on: {new Date(job.timestamp * 1000).toLocaleDateString()}
          </p>
          <p className={`mt-2 ${job.isOpen ? 'text-green-600' : 'text-red-600'}`}>
            {job.isOpen ? 'Open' : 'Closed'}
          </p>
        </div>
      ))}
    </div>
  );
}

