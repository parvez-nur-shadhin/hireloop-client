"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FiBriefcase } from "react-icons/fi";

export default function CompanyNotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-4">
      <div className="relative text-center">
        {/* Glow */}
        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* Card Illustration */}
        <div className="relative mx-auto mb-8 flex h-44 w-40 rotate-[-4deg] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm">
          <div className="w-24 space-y-3">
            <div className="h-6 w-6 rounded bg-white/10" />

            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="h-2 w-4/6 rounded bg-white/10" />
          </div>

          {/* Floating Icon */}
          <div className="absolute -right-4 -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg">
            <FiBriefcase size={18} />
          </div>

          {/* Decorative corner */}
          <div className="absolute bottom-3 right-3 text-white/20">
            <FiBriefcase size={18} />
          </div>
        </div>

        {/* Content */}
        <h1 className="mb-3 text-3xl font-semibold text-white">
          Company not registered yet
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-400">
          Set up your business profile to start posting high-performance job
          listings and manage your talent loop.
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={"/dashboard/recruiter/company/registration"}>
            <Button
              as={Link}
              href="/dashboard/recruiter/company/register"
              size="lg"
              radius="sm"
              className="min-w-[190px] bg-white font-medium text-black"
            >
              Register your company
            </Button>
          </Link>

          <Button
            variant="bordered"
            size="lg"
            radius="sm"
            className="min-w-[140px] border-white/10 bg-white/[0.02] text-white"
          >
            View FAQ
          </Button>
        </div>

        {/* Footer Text */}
        <p className="mt-16 text-xs text-gray-500">
          Need specialized assistance? Contact our enterprise support team.
        </p>
      </div>
    </div>
  );
}
