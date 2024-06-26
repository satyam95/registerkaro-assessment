import Image from "next/image";
import React from "react";
import FaqItem from "../FaqItem";

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-11">
          <div className="text-center text-yellowlight font-sm pb-1.5">FAQ</div>
          <h2 className="text-center font-bold font-h2-dark text-copper">
            Frequent Ask Questions
          </h2>
          <div className="py-10 flex flex-col gap-4">
            <FaqItem text="Can I recover deleted files from desktop with this software?" />
            <FaqItem text="Can I recover deleted files from desktop with this software?" />
            <FaqItem text="Can I recover deleted files from desktop with this software?" />
            <FaqItem text="Can I recover deleted files from desktop with this software?" />
            <FaqItem text="Can I recover deleted files from desktop with this software?" />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-tertiary text-white font-m font-semibold flex gap-1.5 py-3 px-5 rounded-md border border-[#E5E5E7] shadow-btn">
              Show more
              <Image
                src="/arrow-right.svg"
                alt="right arrow"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
