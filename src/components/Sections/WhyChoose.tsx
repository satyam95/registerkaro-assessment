import Image from "next/image";
import React from "react";
import WhyChooseCard from "../WhyChooseCard";

const WhyChoose = () => {
  return (
    <section>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="w-full flex items-center gap-6">
            <div className="w-1/2">
              <div className="text-yellowlight font-sm pb-4">
                WHY REGISTERKARO.IN
              </div>
              <h2 className="font-h2 text-cyanblue font-bold">
                Why Choose Register Karo
              </h2>
              <p className="text-blacktext font-m pt-7 pr-6">
                It is with consistent services and results that build trust with
                the people and that in turn help us to serve the business
                better.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-28">
                <div></div>
                <WhyChooseCard
                  icon="/Satisfaction.svg"
                  iconAlt="Satisfaction icon"
                  title="Guaranteed Satisfaction"
                  description="We ensure that you stay 100% satisfied with our offered services"
                  bg="#EDF3FF"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <WhyChooseCard
                  icon="/safe.svg"
                  iconAlt="save icon"
                  title="Confidential & Safe"
                  description="All your private information is safe with us"
                  bg="#FEF3EF"
                />
                <WhyChooseCard
                  icon="/fee.svg"
                  iconAlt="fee icon"
                  title="No Hidden Fee"
                  description="Everything is put before you with no hidden charges or conditions"
                  bg="#F1FBF3"
                />
                <WhyChooseCard
                  icon="/cs.svg"
                  iconAlt="cs icon"
                  title="Expert CA/CS Assistance"
                  description="Prompt support from our in-house expert professionals"
                  bg="#FBF1FB"
                />
                <WhyChooseCard
                  icon="/safe.svg"
                  iconAlt="save 2 icon"
                  title="Confidential & Safe"
                  description="All your private information is safe with us"
                  bg="#27AE600A"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
