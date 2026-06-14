"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, SearchField } from "@heroui/react";
import JobCard from "@/Components/BrowseJobs/JobCard";
import { getAllJobs } from "@/lib/api/jobs";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  // Set default values for your fields so watch() has an initial state
  const { register, control, watch } = useForm({
    defaultValues: {
      search: "",
      select: "all-jobs",
    },
  });

  // Track the changes of both inputs live
  const currentSearch = watch("search") || "";
  const currentSelect = watch("select") || "all-jobs";

  // Fetch jobs once on layout mount
  useEffect(() => {
    const getJobs = async () => {
      const allJobs = await getAllJobs();
      setJobs(allJobs || []);
    };
    getJobs();
  }, []);

  // Compute the combined filters in real-time
  const filteredJobs = jobs.filter((job) => {
    // 1. Fuzzy Text Search Check
    const matchesSearch = job.jobTitle
      ?.toLowerCase()
      .includes(currentSearch.toLowerCase());

    // 2. Select Dropdown Category Check
    const matchesType =
      currentSelect === "all-jobs" ||
      job.jobType?.toLowerCase() === currentSelect.toLowerCase();

    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto text-zinc-100">
      <div className="flex gap-6 flex-col md:flex-row items-start">
        {/* Left Side: Dropdown Category Selector */}
        <div className="w-full md:w-[256px] flex-shrink-0">
          <label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
            Job Type
          </label>
          <select
            {...register("select")}
            className="w-full border border-zinc-800 rounded-xl p-3 bg-zinc-900 text-zinc-200 outline-none focus:border-zinc-700 transition-colors cursor-pointer"
          >
            <option value="all-jobs">All Jobs</option>
            <option value="full-time">Full-Time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        {/* Right Side: Search Input & Render Cards Section */}
        <div className="flex-1 w-full">
          <div className="mb-4">
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
                    Search
                  </label>
                  <SearchField className="p-0" fullWidth>
                    <SearchField.Group className="bg-zinc-900 border border-zinc-800 focus-within:border-zinc-700 rounded-xl h-12 transition-all">
                      <SearchField.SearchIcon className="text-zinc-500 ml-2" />

                      <SearchField.Input
                        {...field}
                        placeholder="Search jobs by title..."
                        className="text-zinc-200 placeholder:text-zinc-500"
                      />

                      {field.value && (
                        <SearchField.ClearButton
                          onClick={() => field.onChange("")}
                          className="text-zinc-500 hover:text-zinc-300"
                        />
                      )}
                    </SearchField.Group>
                  </SearchField>
                </div>
              )}
            />
          </div>

          {/* Jobs Count Info */}
          <p className="text-sm text-zinc-400 mb-4 font-medium">
            Showing {filteredJobs.length} position
            {filteredJobs.length !== 1 && "s"}
          </p>

          {/* Job Cards Container Map Loop */}
          <div className="grid grid-cols-1 gap-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job._id?.$oid || job._id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
                <p className="text-zinc-500 font-medium">
                  No matching job positions found.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
