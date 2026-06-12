"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import { IoLocationOutline, IoCloudUploadOutline } from "react-icons/io5";
import { addJobs } from "@/lib/actions/jobs";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function AddJobs() {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  defaultValues: {
    jobTitle: "",
    jobCategory: "technology",
    jobType: "full-time",
    minSalary: "",
    maxSalary: "",
    currency: "USD",
    location: "",
    deadline: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    isRemote: false,
    status: "active",
    isPubliclyVisible: true,
  },
});

const onSubmit = async (data) => {
  const jobData = {
    ...data,
    minSalary: Number(data.minSalary),
    maxSalary: Number(data.maxSalary),
    companyId: "company_123", // replace with logged-in company id
    status: "active",
  };
  
  const res = await addJobs(jobData);

  if (res.insertedId) {
    toast.success("Job Posted Successfully");
    redirect("/");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] p-4 text-foreground selection:bg-neutral-800">
      {/* Main Container Wrapper */}
      <main className="w-full max-w-2xl bg-[#121212] border border-neutral-800 text-white p-6 rounded-xl shadow-2xl">
        {/* Form Header */}
        <header className="flex justify-between items-start pb-6">
          <div>
            <h2 className="text-xl font-semibold text-neutral-100">
              Register New Company
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
        </header>

        {/* Form Elements */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="text-sm font-medium text-neutral-300">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
              {...register("jobTitle", {
                required: "Job title is required",
              })}
            />
            {errors.jobTitle && (
              <p className="text-danger text-xs mt-1">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          {/* Category + Type */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-300">
                Job Category
              </label>
              <select
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("jobCategory")}
              >
                <option value="technology">Technology</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-300">
                Job Type
              </label>
              <select
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("jobType")}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Salary */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-300">
                Minimum Salary
              </label>
              <input
                type="number"
                placeholder="25000"
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("minSalary", {
                  required: "Minimum salary required",
                })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-300">
                Maximum Salary
              </label>
              <input
                type="number"
                placeholder="30000"
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("maxSalary", {
                  required: "Maximum salary required",
                })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-300">
                Currency
              </label>
              <select
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("currency")}
              >
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          {/* Location + Deadline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-300">
                Location
              </label>
              <input
                type="text"
                placeholder="Dhaka"
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("location", {
                  required: "Location required",
                })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-300">
                Deadline
              </label>
              <input
                type="date"
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
                {...register("deadline", {
                  required: "Deadline required",
                })}
              />
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="text-sm font-medium text-neutral-300">
              Responsibilities
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
              placeholder="Develop applications..."
              {...register("responsibilities", {
                required: "Responsibilities required",
              })}
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="text-sm font-medium text-neutral-300">
              Requirements
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
              placeholder="React, Node.js..."
              {...register("requirements", {
                required: "Requirements required",
              })}
            />
          </div>

          {/* Benefits */}
          <div>
            <label className="text-sm font-medium text-neutral-300">
              Benefits
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-xl bg-[#1c1c1e] text-neutral-200"
              placeholder="Health insurance, bonus..."
              {...register("benefits")}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-neutral-300">
              <input type="checkbox" {...register("isRemote")} />
              Remote Job
            </label>

            <label className="flex items-center gap-2 text-neutral-300">
              <input
                type="checkbox"
                defaultChecked
                {...register("isPubliclyVisible")}
              />
              Publicly Visible
            </label>
          </div>

          <Button
            type="submit"
            className="bg-white text-black font-semibold px-6"
          >
            Post Job
          </Button>
        </form>
      </main>
    </div>
  );
}
