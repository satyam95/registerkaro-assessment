import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="hero-gradient">
        <div className="py-14">
          <div className="container mx-auto">
            <div className="w-full flex items-center">
              <div className="w-1/2">
                <div className="flex gap-1.5 mb-5">
                  <Image
                    src="/star.svg"
                    alt="star icon"
                    height={20}
                    width={20}
                  />
                  <div className="font-semibold text-[14px] leading-[18px] text-[#181617]">
                    Google Rating
                  </div>
                  <Image
                    src="/starset.svg"
                    alt="star set icon"
                    height={15}
                    width={79}
                  />
                </div>
                <h1 className="font-medium text-[48.63px] leading-[60px] text-[#010101] -tracking-[1.5px]">
                  Your trusted partner for compliance business needs
                </h1>
                <div className="h-px w-10 bg-[#F60014] mt-5 mb-6"></div>
                <p className="text-[#4F4F4F] text-[20px] leading-[28.8px]">
                  An online business compliance platform that helps
                  entrepreneurs and other individuals with various,
                  <span className="font-semibold">
                    registrations, tax filings,
                  </span>{" "}
                  and other{" "}
                  <span className="font-semibold">legal matters.</span>
                </p>
                <div className="py-9">
                  <Image
                    src="/number-block.svg"
                    alt="number-block icon"
                    width={583}
                    height={50}
                  />
                </div>
                <div className=" flex items-center gap-2">
                  <button className="text-base leading-5 bg-tertiary text-white flex items-center gap-2 py-3 px-5 font-bold rounded-md shadow-btn-blue">
                    Talk An Expert
                  </button>
                  <button className="text-base leading-5 font-semibold text-[#282828] flex items-center gap-2 py-3 px-5">
                    <Image
                      src="/play.svg"
                      alt="play icon"
                      height={24}
                      width={24}
                    />{" "}
                    See how it works
                  </button>
                </div>
              </div>
              <div className="w-1/2 relative">
                <Image
                  src="/hero-image.svg"
                  alt="hera image"
                  height={485}
                  width={600}
                />
                <Image
                  src="/aim.svg"
                  alt="aim image"
                  height={171}
                  width={229}
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-0">
        <div className="flex flex-col gap-6">
          <div className="bg-white pl-6 py-4 pr-4 shadow-btn abs-radius">
            <div className="text-[14px] leading-[18px] text-[#000000] font-medium tracking-[0.4px]">
              Annual Compliance
            </div>
          </div>
          <div className="bg-white pl-6 py-4 pr-4 shadow-btn abs-radius">
            <div className="text-[14px] leading-[18px] text-[#000000] font-medium tracking-[0.4px]">
              Payroll Services
            </div>
          </div>
          <div className="bg-white pl-6 py-4 pr-4 shadow-btn abs-radius">
            <div className="text-[14px] leading-[18px] text-[#000000] font-medium tracking-[0.4px]">
              Company Formation
            </div>
          </div>
          <div className="bg-white pl-6 py-4 pr-4 shadow-btn abs-radius">
            <div className="text-[14px] leading-[18px] text-[#000000] font-medium tracking-[0.4px]">
              Annual Compliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
