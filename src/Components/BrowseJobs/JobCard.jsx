import { Card, Chip, Button } from "@heroui/react";
import {
  FiBookmark,
  FiMapPin,
  FiDollarSign,
  FiBriefcase,
} from "react-icons/fi";

const JobCard = ({ job }) => {
  const {
    companyName,
    location,
    jobType,
    isRemote,
    jobTitle,
    minSalary,
    maxSalary,
  } = job;

  return (
    <div>
      <Card className="border border-default-200 hover:border-primary transition-all duration-300 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{jobTitle}</h2>

            <p className="text-default-500 mt-1">
              {companyName} • {location}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Chip
                variant="flat"
              >
                <FiDollarSign className="ml-2" />
                ৳{minSalary.toLocaleString()} - ৳{maxSalary.toLocaleString()}
              </Chip>

              <Chip
                variant="flat"
                className="capitalize"
              >
                <FiBriefcase className="ml-2" />
                {jobType}
              </Chip>

              {isRemote && (
                <Chip color="success" variant="flat">
                  Remote
                </Chip>
              )}
            </div>
          </div>

          <Button isIconOnly variant="light">
            <FiBookmark size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
