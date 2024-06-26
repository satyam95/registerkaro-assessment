import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialLinkTypes = {
  icon: string;
  alt: string;
  link: string;
  width: number;
  height: number;
};

const SocialLink = ({ icon, alt, link, width, height }: SocialLinkTypes) => {
  return (
    <Link href={link}>
      <Image src={icon} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default SocialLink;
