"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Sep,
  Separator,
} from "@heroui/react";

import { FiMapPin, FiGlobe, FiUsers, FiExternalLink } from "react-icons/fi";

const activeRoles = [
  {
    id: 1,
    title: "Senior Distributed Systems Engineer",
    location: "Remote",
    salary: "$180k - $240k",
  },
  {
    id: 2,
    title: "Product Design Lead",
    location: "New York",
    salary: "$160k - $210k",
  },
  {
    id: 3,
    title: "DevOps Architect (Infra)",
    location: "Remote",
    salary: "$190k+",
  },
];

// {
//     "_id": "6a2d20747a954d5f50fd7ad1",
//     "owner": "6a2d1fd82c1efee9511c85bf",
//     "companyName": "Ninja Developers",
//     "industry": "t",
//     "websiteUrl": "www.ninjaDevelopers.com",
//     "location": "Mirpur, Dhaka",
//     "employeeCount": "1",
//     "description": "Here we develop....",
//     "logo": "https://i.ibb.co/DPqkJvYZ/naruto.png"
// }

export default function CompanyProfile({ company }) {
  const { companyName, websiteUrl, description, logo } = company;

  return (
    <section className="min-h-screen bg-[#050816] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-b-3xl border-b border-white/10">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <Image src={logo} alt={companyName} height={100} width={100} />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold">{companyName}</h1>

                  <Chip size="sm" color="success" variant="flat">
                    Approved
                  </Chip>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="bordered" className="border-white/20 text-white">
                Follow
              </Button>

              <Button
                as={Link}
                href={websiteUrl}
                target="_blank"
                color="primary"
                endContent={<FiExternalLink />}
              >
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left Side */}
          <div className="space-y-8">
            {/* About */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">About LuminaTech</h2>

              <div className="space-y-4 text-gray-400 leading-7">
                {description}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">Company Stats</h3>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="bg-white/5 border border-white/10">
                  <CardContent>
                    <FiUsers className="mb-3 text-xl text-primary" />

                    <h4 className="text-2xl font-bold">12,400+</h4>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Team Members
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border border-white/10">
                  <CardContent>
                    <FiMapPin className="mb-3 text-xl text-primary" />

                    <h4 className="text-2xl font-bold">San Francisco</h4>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Headquarters
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border border-white/10">
                  <CardContent>
                    <FiGlobe className="mb-3 text-xl text-primary" />

                    <h4 className="text-2xl font-bold">24 Countries</h4>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Presence
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <Card className="h-fit bg-white/5 border border-white/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-5">
                <h3 className="font-semibold">Active Roles</h3>

                <Chip size="sm" variant="flat">
                  14
                </Chip>
              </div>

              <Separator />

              <div>
                {activeRoles.map((role, index) => (
                  <div key={role.id}>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium">{role.title}</h4>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <Chip size="sm" variant="flat">
                              {role.location}
                            </Chip>

                            <Chip size="sm" variant="flat">
                              {role.salary}
                            </Chip>
                          </div>
                        </div>

                        <Button size="sm" color="primary">
                          Quick Apply
                        </Button>
                      </div>
                    </div>

                    {index !== activeRoles.length - 1 && <Separator />}
                  </div>
                ))}
              </div>

              <Separator />

              <div className="p-4 text-center">
                <Button
                  as={Link}
                  href="/jobs"
                  variant="light"
                  className="w-full"
                >
                  See all openings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
