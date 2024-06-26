import Image from "next/image";
import React from "react";

type WhyChooseCardType = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  bg: string;
};

const WhyChooseCard = ({
  icon,
  iconAlt,
  title,
  description,
  bg,
}: WhyChooseCardType) => {
  return (
    <div
      className="px-6 py-11 border-[#FCDDEC] border rounded-xl"
      style={{ backgroundColor: bg }}
    >
      <Image
        src={icon}
        alt={iconAlt}
        width={40}
        height={40}
        className="mx-auto pb-5"
      />
      <h3 className="text-[#000000] text-center text-[20px] leading-[30px] font-medium pb-1.5">
        {title}
      </h3>
      <p className="font-m text-[#666666] text-center">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
