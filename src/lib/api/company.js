const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompany = async(id) => {
    const res = await fetch(`${baseURL}/api/companies?owner=${id}`);
    return res.json();
}