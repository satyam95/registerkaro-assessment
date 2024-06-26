import React from "react";
import IconPoint from "../IconPoint";

const NewsletterCTA = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto">
        <div className="py-16">
          <div className="font-s text-center text-white font-semibold pb-2">
            1% OF THE INDUSTRY
          </div>
          <h2 className="font-h2 text-center text-white font-bold">
            Welcome to your new digital reality. Now.
          </h2>
          <div className="pt-8 flex justify-center items-center ">
            <div className="bg-white rounded-md w-full max-w-[512px] flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="grow px-4 py-3 font-m outline-none text-[#858C95] rounded-l-md"
              />
              <button className="bg-secondary w-[92px] py-3 px-5 font-m text-white font-semibold rounded-r-md">
                Submit
              </button>
            </div>
          </div>
          <div className="pt-8 flex justify-center items-center gap-6">
            <IconPoint text="Instant results" />
            <IconPoint text="User-friendly interface" />
            <IconPoint text="Personalized customization" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
