import React from "react";
import SocialLink from "./SocialLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primarydark">
      <div className="py-16">
        <div className="container mx-auto">
          <div className="px-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4 w-full max-w-[247px]">
                <p className="text-base text-texttwo font-medium -tracking-[1%]">
                  Design outstanding interfaces with advanced Figma features in
                  a matter of minutes.
                </p>
                <div className="flex items-center gap-6">
                  <SocialLink
                    icon="/fb-white.svg"
                    alt="facebook icon"
                    link="#"
                    width={24}
                    height={24}
                  />
                  <SocialLink
                    icon="/google-white.svg"
                    alt="google icon"
                    link="#"
                    width={24}
                    height={24}
                  />
                  <SocialLink
                    icon="/apple-white.svg"
                    alt="apple icon"
                    link="#"
                    width={24}
                    height={24}
                  />
                  <SocialLink
                    icon="/insta-white.svg"
                    alt="instagram icon"
                    link="#"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-secondary text-base font-bold uppercase -tracking-[1%] pb-6">
                  START A BUSINESS
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Features
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Solutions
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Integrations
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Enterprise
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Solutions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-secondary text-base font-bold uppercase -tracking-[1%] pb-6">
                  GOVERNMENT REGISTRATION
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Partners
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Community
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Developers
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    App
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Blog
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-secondary text-base font-bold uppercase -tracking-[1%] pb-6">
                  COMPLIANCE & TAX
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Channels
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Scale
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Watch the Demo
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Our Competition
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-secondary text-base font-bold uppercase -tracking-[1%] pb-6">
                  BIS & CDSCO
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    About Us
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    News
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Leadership
                  </li>
                  <li className="text-base text-texttwo font-medium -tracking-[1%]">
                    Media Kit
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-16 w-full flex justify-center items-center">
                <div className="bg-secondary h-14 w-14 rounded-full flex justify-center items-center">
                    <Image src="/up-arrow.svg" alt="up arrow" width={32} height={31} />
                </div>
            </div>
            <div className="text-base text-texttwo font-medium -tracking-[1%] pt-4 text-center">© 2024 Registerkaro. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
