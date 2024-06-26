import Image from "next/image";
import React from "react";

type InfoCardType = {
  icon: string;
  title: string;
  description: string;
};

const InfoCard = ({ icon, title, description }: InfoCardType) => {
  return (
    <div className=" p-12 w-full mx-auto">
      <Image
        src={icon}
        alt={`${title} icon`}
        height={60}
        width={60}
        className="mx-auto pb-8"
      />
      <h3 className="text-xl leading-5 text-black font-extrabold text-center pb-8">
        {title}
      </h3>
      <p className="explore-text font-light text-center">{description}</p>
      <div className="flex justify-center items-center pt-14">
        <button className="text-base leading-5 text-[#001038] font-semibold flex items-center gap-2">
          Learn More
          <Image
            src="/color-right-arrow.svg"
            alt="right-arrow"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
