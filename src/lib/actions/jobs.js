'use server'

import { serverMutation } from "../core/server";

export const addJobs = async (newJob) => {
  return serverMutation("/api/jobs", newJob);
};

export const addCompanies = async (newCompany) => {
  return serverMutation("/api/companies", newCompany);
};
