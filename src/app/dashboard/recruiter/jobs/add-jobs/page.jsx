"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import { IoCloseCircleOutline, IoLocationOutline, IoCloudUploadOutline } from "react-icons/io5";

export default function AddJobs() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      companyName: "",
      industry: "technology",
      websiteUrl: "",
      location: "",
      employeeCount: "1-10",
      description: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] p-4 text-foreground selection:bg-neutral-800">
      {/* Main Container Wrapper */}
      <main className="w-full max-w-2xl bg-[#121212] border border-neutral-800 text-white p-6 rounded-xl shadow-2xl">
        
        {/* Form Header */}
        <header className="flex justify-between items-start pb-6">
          <div>
            <h2 className="text-xl font-semibold text-neutral-100">Register New Company</h2>
            <p className="text-sm text-neutral-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
          </div>
        </header>

        {/* Form Elements */}
        <form id="register-company-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Row 1: Company Name & Industry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Company Name</label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className={`w-full h-10 px-3 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] focus:bg-[#1c1c1e] text-sm text-neutral-200 border-2 transition-colors focus:outline-none 
                  ${errors.companyName ? "border-danger focus:border-danger" : "border-transparent focus:border-neutral-700"}`}
                {...register("companyName", { required: "Company name is required" })}
              />
              {errors.companyName && (
                <span className="text-xs text-danger mt-0.5">{errors.companyName.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Industry / Category</label>
              <div className="relative">
                <select
                  {...register("industry")}
                  className="w-full h-10 pl-3 pr-10 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] text-sm text-neutral-200 border-2 border-transparent focus:outline-none focus:border-neutral-700 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="technology" className="bg-[#1c1c1e]">Technology</option>
                  <option value="finance" className="bg-[#1c1c1e]">Finance</option>
                  <option value="healthcare" className="bg-[#1c1c1e]">Healthcare</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 2: Website URL & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Website URL</label>
              <div className="flex items-center w-full h-10 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] focus-within:!bg-[#1c1c1e] border-2 border-transparent focus-within:!border-neutral-700 transition-colors px-3">
                <span className="text-sm text-neutral-500 pr-2 border-r border-neutral-700 select-none">https://</span>
                <input
                  type="text"
                  placeholder="www.company.com"
                  className="w-full bg-transparent text-sm text-neutral-200 focus:outline-none pl-2"
                  {...register("websiteUrl")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Location</label>
              <div className="flex items-center w-full h-10 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] focus-within:!bg-[#1c1c1e] border-2 border-transparent focus-within:!border-neutral-700 transition-colors px-3">
                <IoLocationOutline className="text-neutral-500 flex-shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full bg-transparent text-sm text-neutral-200 focus:outline-none pl-2"
                  {...register("location")}
                />
              </div>
            </div>
          </div>

          {/* Row 3: Employee Count & Logo Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Employee Count Range</label>
              <div className="relative">
                <select
                  {...register("employeeCount")}
                  className="w-full h-10 pl-3 pr-10 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] text-sm text-neutral-200 border-2 border-transparent focus:outline-none focus:border-neutral-700 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="1-10" className="bg-[#1c1c1e]">1-10 employees</option>
                  <option value="11-50" className="bg-[#1c1c1e]">11-50 employees</option>
                  <option value="51-200" className="bg-[#1c1c1e]">51-200 employees</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">Company Logo</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center justify-center w-12 h-12 rounded-lg border border-dashed border-neutral-700 bg-[#1c1c1e] cursor-pointer hover:bg-[#242426] transition-colors">
                  <IoCloudUploadOutline className="text-neutral-400" size={20} />
                  <input type="file" accept="image/png, image/jpeg" className="hidden" />
                </label>
                <div>
                  <p className="text-sm text-neutral-200 font-medium">Upload image</p>
                  <p className="text-xs text-neutral-500">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Brief Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-300">Brief Description</label>
            <textarea
              placeholder="Tell us about your company's mission and culture..."
              rows={4}
              className="w-full p-3 rounded-xl bg-[#1c1c1e] hover:bg-[#242426] focus:bg-[#1c1c1e] text-sm text-neutral-200 border-2 border-transparent focus:outline-none focus:border-neutral-700 transition-colors resize-none"
              {...register("description")}
            />
          </div>

          {/* Footer Control Actions */}
          <footer className="flex justify-end gap-3 pt-6 border-t border-neutral-800 mt-4">
            <Button 
              type="submit" 
              className="bg-white text-black font-semibold px-6 hover:bg-neutral-200"
            >
              Register Company
            </Button>
          </footer>
        </form>

      </main>
    </div>
  );
}