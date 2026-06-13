import CompanyNotFound from "@/Components/dashboard/Company/CompanyNotFound";
import CompanyProfile from "@/Components/dashboard/Company/CompanyProfile";
import { getCompany } from "@/lib/api/company";
import { getUser } from "@/lib/core/session";

export default async function CompanyPage() {
  const loggedUser = await getUser();
  const recruiter = loggedUser?.user;
  const recruiterId = recruiter.id;
  const companies = await getCompany(recruiterId);
  const company = companies[0];

  return <div>{company.length == 0 ? <CompanyNotFound /> : <CompanyProfile company={company} />}</div>;
}
