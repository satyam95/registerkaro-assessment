import Image from "next/image";
import React from "react";

type FaqItemTypes = {
  text: string;
};

const FaqItem = ({ text }: FaqItemTypes) => {
  return (
    <div className="faq-border pl-8 pr-4 flex justify-between items-center relative py-6 rounded-md">
      <div className="gradient-line w-1.5 absolute top-0 left-0 h-full rounded-l-md" />
      <div className="text-blacktext font-l-letter font-medium">{text}</div>
      <Image
        src="/left-arrow.svg"
        alt="left arrow icon"
        width={25}
        height={25}
      />
    </div>
  );
};

export default FaqItem;
