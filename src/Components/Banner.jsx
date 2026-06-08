import { Button, SearchField } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/globe.png')" }}
    >
      {/* Upper Part */}
      <div className="pt-46.5">
        <div>
          <div className="text-center space-y-8 mt-10">
            <h1 className=" text-xl font-space-mono text-white/50 p-2 mx-auto rounded-full bg-none border border-white max-w-105 flex items-center gap-4 justify-center">
              <RiShoppingBag3Fill size={30} />{" "}
              <span className="font-bold text-white">50,000+</span> NEW JOBS
              THIS MONTH
            </h1>
            <h1 className="text-[56px] font-bold">Find Your Dream Job Today</h1>
            <h2 className="text-[20px] text-white/50">
              HireLoop connects top talent with world-class companies. Browse
              thousands of <br /> curated opportunities and land your next role
              — faster.
            </h2>
          </div>
          <div className="p-3 bg-[#101010] rounded-lg max-w-196 mx-auto mt-12">
            <form className="flex flex-col md:flex-row items-center mx-auto gap-3">
              <SearchField fullWidth name="search">
                <SearchField.Group className={"bg-[#101010]"}>
                  <SearchField.SearchIcon />
                  <SearchField.Input placeholder="Job title, skill or company" />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>
              <SearchField fullWidth name="search">
                <SearchField.Group className={"bg-[#101010]"}>
                  <SearchField.SearchIcon />
                  <SearchField.Input placeholder="Location or Remote" />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>

              <Button
                className={
                  "bg-[#5C53FE] text-white rounded-lg w-full md:w-15"
                }
              >
                <FaSearch />
              </Button>
            </form>
          </div>
          <div className="text-center flex items-center justify-center gap-4 mt-6">
            <h1>Trending Position</h1>
            <h1 className="text-white border-white p-1.5 text-[14px] border rounded-full text-center max-w-35">Product Designer</h1>
            <h1 className="text-white border-white p-1.5 text-[14px] border rounded-full text-center max-w-35">AI Engineer</h1>
            <h1 className="text-white border-white p-1.5 text-[14px] border rounded-full text-center max-w-35">Dev-Ops Engineer</h1>
          </div>
        </div>
      </div>
      {/* Lower Part */}
      <div className="mt-50" >
        <div>
            <h1 className="text-center text-[40px] font-medium text-white/70">Assisting over 15,000 job seekers <br /> find their dream positions.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-12">
            <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
