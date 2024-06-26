import React from "react";
import InfoCard from "../InfoCard";

const ExploreSection = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="py-10">
        <div className="container mx-auto">
          <div>
            <div className="text-yellowlight font-sm text-center pb-4">
              WHY REGISTERKARO.IN
            </div>
            <h2 className="font-h2 text-cyanblue text-center font-bold">
              Why Choose Register Karo
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-y-12 pt-12">
            <InfoCard
              icon="/company.svg"
              title="Company Formation"
              description="Build web-based solutions that enhance customer experience."
            />
            <InfoCard
              icon="/Secretarial.svg"
              title="Company Secretarial Services"
              description="Make data-driven decisions and utilize technology to reach business goals."
            />
            <InfoCard
              icon="/Virtual.svg"
              title="Virtual Office Address"
              description="Foster customer relationships by effectively serving your market."
            />
            <InfoCard
              icon="/Compliance.svg"
              title="Annual Compliance Services"
              description="Turn your ideas into modern products with our design experts."
            />
            <InfoCard
              icon="/Payroll.svg"
              title="Payroll Services"
              description="Expand your business across the globe with minimal effort."
            />
            <InfoCard
              icon="/Bookkeeping.svg"
              title="Bookkeeping Services"
              description="Steering user behaviours with creative design, data insights & technology."
            />
          </div>
          <div className="flex justify-center items-center pt-10">
            <button className="text-base leading-5 bg-tertiary text-white flex items-center gap-2 py-3 px-5 rounded-md shadow-btn-blue">
              See All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
