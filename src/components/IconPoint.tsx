import Image from "next/image";
import React from "react";

type IconPointType = {
  text: string;
};

const IconPoint = ({ text }: IconPointType) => {
  return (
    <div className="font-l font-medium text-white flex gap-4 items-center">
      <Image src="/tick.svg" alt="tick icon" width={20} height={24} />
      {text}
    </div>
  );
};

export default IconPoint;
