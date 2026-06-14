import JobDetails from "@/Components/BrowseJobs/JobDetails";
import { getAllJobs } from "@/lib/api/jobs";
import {
  Chip,
  Card,
  Button,
} from "@heroui/react";

import {
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiDollarSign,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

export default async function JobDetailsPage({ params }) {
  const { id } = await params;

  const jobs = await getAllJobs();

  const expectedJob = jobs.find(job => id === job._id);
  console.log(expectedJob);

  return (
    <div className="min-h-screen bg-black text-white">
        <JobDetails expectedJob={expectedJob} />
    </div>
  );
}