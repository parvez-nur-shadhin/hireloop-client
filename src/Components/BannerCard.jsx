import { Card } from "@heroui/react";
import { FaSearchengin } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineBarChart, MdOutlineStarRate } from "react-icons/md";
const BannerCard = () => {
  return (
    <>
      <Card className="w-78 gap-2">
        <Card.Header>
          <Card.Title className="mb-18.5">
            <IoBagHandle size={30} />
          </Card.Title>
          <Card.Description className="text-[56px] font-semibold text-white">
            50K
          </Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2 mt-4">
          <span className="text-[18px]">Active Jobs</span>
        </Card.Footer>
      </Card>
      <Card className="w-78 gap-2">
        <Card.Header>
          <Card.Title className="mb-18.5">
            <MdOutlineBarChart size={30} />
          </Card.Title>
          <Card.Description className="text-[56px] font-semibold text-white">
            12K
          </Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2 mt-4">
          <span className="text-[18px]">Companies</span>
        </Card.Footer>
      </Card>
      <Card className="w-78 gap-2">
        <Card.Header>
          <Card.Title className="mb-18.5">
            <FaSearchengin size={30} />
          </Card.Title>
          <Card.Description className="text-[56px] font-semibold text-white">
            2M
          </Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2 mt-4">
          <span className="text-[18px]">Job Seekers</span>
        </Card.Footer>
      </Card>
      <Card className="w-78 gap-2">
        <Card.Header>
          <Card.Title className="mb-18.5">
            <MdOutlineStarRate size={30} />
          </Card.Title>
          <Card.Description className="text-[56px] font-semibold text-white">
            97%
          </Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2 mt-4">
          <span className="text-[18px]">Satisfaction Rate</span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BannerCard;
