import Image from "next/image";
import React from "react";
import SocialLink from "./SocialLink";

const Header = () => {
  return (
    <header>
      <div className="bg-primary">
        <div className="container mx-auto">
          <div className="py-2">
            <div className="flex items-center justify-end gap-4">
              <button className="flex items-center gap-1.5">
                <Image
                  src="/message.svg"
                  alt="message icon"
                  width={15}
                  height={11}
                />
                <div className="text-white text-sm">www.registerkaro.in</div>
              </button>
              <div className="h-7 w-px divider-gradient" />
              <button className="flex items-center gap-1.5">
                <Image
                  src="/phone.svg"
                  alt="phone icon"
                  width={15}
                  height={11}
                />
                <div className="text-white text-sm">+918447746183</div>
              </button>
              <div className="h-7 w-px divider-gradient" />
              <div className="flex gap-4">
                <SocialLink
                  icon="/Insta.svg"
                  alt="instagram icon"
                  link="#"
                  width={17}
                  height={17}
                />
                <SocialLink
                  icon="/Fb.svg"
                  alt="facebook icon"
                  link="#"
                  width={17}
                  height={17}
                />
                <SocialLink
                  icon="/Twiter.svg"
                  alt="twitter icon"
                  link="#"
                  width={17}
                  height={17}
                />
                <SocialLink
                  icon="/Pintrest.svg"
                  alt="pintrest icon"
                  link="#"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-graylight border-b">
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between">
            <div className="relative -mt-2">
              <Image
                src="/logo.png"
                alt="registerkaro logo"
                width={222}
                height={57}
              />
            </div>
            <div className="flex items-center gap-7">
              <nav>
                <ul className="flex items-center gap-7">
                  <li className="text-cyanblue text-base font-semibold cursor-pointer font-open-sans">
                    Home
                  </li>
                  <li className="text-cyanblue text-base font-semibold cursor-pointer flex items-center gap-1.5 font-open-sans">
                    Our Services{" "}
                    <Image
                      src="/down.svg"
                      alt="down icon"
                      width={10}
                      height={6}
                    />
                  </li>
                  <li className="text-cyanblue text-base font-semibold cursor-pointer font-open-sans">
                    Blog
                  </li>
                  <li className="text-cyanblue text-base font-semibold cursor-pointer font-open-sans">
                    Contact Us
                  </li>
                  <li className="text-cyanblue text-base font-semibold cursor-pointer font-open-sans">
                    About us
                  </li>
                </ul>
              </nav>
              <div>
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <button className="bg-secondary w-[157px] text-white font-bold text-base leading-[21.79px] tracking-[-0.3px] py-3 rounded font-open-sans">
                Talk An Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
