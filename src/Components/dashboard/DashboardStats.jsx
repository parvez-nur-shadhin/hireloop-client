"use client";

import { Card } from "@heroui/react";
import { FiFileText, FiUsers, FiZap, FiCheckCircle } from "react-icons/fi";

const stats = [
  {
    label: "Total Job Posts",
    value: "48",
    icon: FiFileText,
  },
  {
    label: "Total Applicants",
    value: "1,284",
    icon: FiUsers,
  },
  {
    label: "Active Jobs",
    value: "18",
    icon: FiZap,
  },
  {
    label: "Jobs Closed",
    value: "32",
    icon: FiCheckCircle,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="border border-default-200 bg-content1 p-5 flex flex-col gap-4"
          >
            {/* icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-default-100">
              <Icon size={18} />
            </div>

            {/* content */}
            <div>
              <p className="text-small text-default-500">
                {item.label}
              </p>
              <h2 className="text-2xl font-semibold">
                {item.value}
              </h2>
            </div>
          </Card>
        );
      })}
    </div>
  );
}