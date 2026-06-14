import { Button, Card, Chip, Description } from "@heroui/react";
import Link from "next/link";
import React from "react";
import {
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi";

const JobDetails = ({ expectedJob }) => {
  //     {
  //     "_id": "6a2e784c1951b1f30b9d3366",
  //     "jobTitle": "Mobile App Developer",
  //     "jobCategory": "technology",
  //     "jobType": "freelance",
  //     "minSalary": 35000,
  //     "maxSalary": 75000,
  //     "currency": "BDT",
  //     "location": "Uttara, Dhaka",
  //     "deadline": "2026-07-18",
  //     "benefits": "Remote Work",
  //     "isRemote": true,
  //     "status": "active",
  //     "isPubliclyVisible": true,
  //     "companyId": "6a2d55997fa46f3b71cdc5c0",
  //     "companyName": "Ninja Developers"
  // }

  const {
    jobTitle,
    companyName,
    minSalary,
    location,
    jobType,
    description,
    benefits,
    responsibilities,
    requirements,
    maxSalary,
    isRemote,
    deadline
  } = expectedJob;

  const parseMultilineData = (textString) => {
    if (!textString) return [];
    return textString.split(/\\n|\n/).filter((line) => line.trim().length > 0);
  };

  const formattedResponsibilities = parseMultilineData(responsibilities);
  const formattedRequirements = parseMultilineData(requirements);
  const formattedBenefits = parseMultilineData(benefits);

  // Format currency dynamically based on the dataset properties
  const salaryString = `${Number(minSalary).toLocaleString()} - ${Number(maxSalary).toLocaleString()}`;

  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100 p-6 md:p-12 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* --- Header Section --- */}
        <Card className="bg-[#18181b] border border-zinc-800/50 p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <Card.Title className="text-2xl font-bold text-white">
                  {jobTitle}
                </Card.Title>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-300">
                    {companyName}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="inline-flex items-center text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                    Verified Employer
                  </span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <Button
                variant="flat"
                className="bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/50 h-10 px-4 rounded-xl text-sm font-medium"
              >
                Save
              </Button>
              <Link href={`/jobs/${expectedJob._id}/apply`}>
              <Button variant="outline"  className="bg-white hover:bg-zinc-200 text-black font-semibold h-10 px-6 rounded-xl transition-colors shadow-lg">
                Apply Now
              </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* --- Highlight Metrics Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "SALARY RANGE", value: salaryString },
            { label: "LOCATION", value: location },
            {
              label: "JOB TYPE",
              value: isRemote ? "Remote" : `${jobType}`,
            },
            { label: "APPLICATION DEADLINE", value: deadline },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-[#18181b] border border-zinc-800/50 p-5 rounded-xl flex flex-col justify-center min-h-[90px]"
            >
              <p className="text-[10px] tracking-wider font-bold text-zinc-500 uppercase">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-zinc-200 mt-1 capitalize">
                {item.value}
              </p>
            </Card>
          ))}
        </div>

        {/* --- Main Content Card --- */}
        <Card className="bg-[#18181b] border border-zinc-800/50 p-6 md:p-8 rounded-2xl">
          <div className="space-y-8">
            {/* Responsibilities */}
            {formattedResponsibilities.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Responsibilities
                </h3>
                <ul className="space-y-3">
                  {formattedResponsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="text-zinc-600 mt-1 select-none">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {formattedRequirements.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Requirements</h3>
                <ul className="space-y-3">
                  {formattedRequirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="text-zinc-600 mt-1 select-none">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {formattedBenefits.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {formattedBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-800/20 border border-zinc-800/60 p-4 rounded-xl text-sm font-medium text-zinc-300"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;
