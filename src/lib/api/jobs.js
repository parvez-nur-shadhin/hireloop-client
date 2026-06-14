const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs = async(companyId, status = "active") => {
    const res = await fetch(`${baseURL}/api/jobs?companyId=${companyId}&status=${status}`);
    return res.json();
}

export const getAllJobs = async() => {
    const res = await fetch(`${baseURL}/api/jobs`);
    return res.json();
}