"use client";

import { Input, Select, Checkbox } from "@heroui/react";

export default function JobFilter({ filters, setFilters }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      {/* SEARCH */}
      <Input
        placeholder="Search jobs or company..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
        className="w-full md:w-1/2"
      />

      {/* JOB TYPE (FIXED - NO SelectItem) */}
      <Select
        placeholder="Job Type"
        selectedKeys={[filters.jobType]}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0];
          setFilters({ ...filters, jobType: value });
        }}
        className="w-full md:w-1/4"
      >
        <Select.Option key="all">All</Select.Option>
        <Select.Option key="full-time">Full Time</Select.Option>
        <Select.Option key="part-time">Part Time</Select.Option>
        <Select.Option key="contract">Contract</Select.Option>
      </Select>

      {/* REMOTE */}
      <Checkbox
        isSelected={filters.remote}
        onChange={(e) =>
          setFilters({ ...filters, remote: e.target.checked })
        }
      >
        Remote Only
      </Checkbox>
    </div>
  );
}