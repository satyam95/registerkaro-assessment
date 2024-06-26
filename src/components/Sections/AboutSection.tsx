import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section>
      <div className="py-16 relative overflow-hidden">
        <div className="container mx-auto z-50">
          <div className="w-full flex items-center gap-6">
            <div className="w-1/2">
              <div className="text-yellowlight font-sm pb-4">
                WELCOME TO REGISTERKARO.IN
              </div>
              <h2 className="font-h2 text-cyanblue font-bold">
                About <span className="text-secondary">Register Karo</span>
              </h2>
              <p className="text-blacktext font-m pt-7 pr-6">
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I’m
                extremely pleased with their performance, ability to execute,
                and willingness to adapt in our ever changing environment. Perry
                is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone’s expectations.
              </p>
              <p className="text-blacktext font-m pt-4 pr-6">
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>
              <div className="flex justify-start items-center pt-10">
                <button className="text-base leading-5 bg-tertiary text-white flex items-center gap-2 py-3 px-5 rounded-md shadow-btn-blue">
                  Learn More{" "}
                  <Image
                    src="/rounder-right.svg"
                    alt="right-arrow"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <Image src="/group-photo.png" alt="group photo" width={584} height={422} className="mx-auto" />
            </div>
          </div>
        </div>
        <Image src="/shape-square.svg" alt="shape-square image" height={123} width={130} className="absolute bottom-16 right-0 z-0"/>
        <Image src="/shape-curve.svg" alt="shape-curve image" height={750} width={50} className="absolute top-6 -right-1 z-10"/>
      </div>
    </section>
  );
};

export default AboutSection;
