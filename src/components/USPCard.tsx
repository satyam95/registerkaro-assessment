import Image from "next/image";
import React from "react";

type USPCardTypes = {
  icon: string;
  bgColor: string;
  text: string;
  altText: string;
};

const USPCard = ({ icon, bgColor, altText, text }: USPCardTypes) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <Image src={icon} alt={altText} height={24} width={24} />
      </div>
      <div className="text-copper text-lg font-semibold">{text}</div>
    </div>
  );
};

export default USPCard;
