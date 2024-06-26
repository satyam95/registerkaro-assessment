import Image from "next/image";
import React from "react";

const VideoIntroduction = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto">
        <div className="py-14">
          <div className="w-full flex items-center">
            <div className="w-1/2">
              <div className="pr-16">
                <h2 className="font-h2-new font-bold text-white pb-5">
                  0ur Video Introductions
                </h2>
                <p className="text-base text-texttwo">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                  magna vulputate pellentesque a diam tincidunt apis dui.
                </p>
                <div className="pt-12 flex flex-col gap-8">
                  <div className="flex gap-4 w-full">
                    <div className="bg-secondary min-w-14 h-14 rounded-full flex items-center justify-center">
                      <Image
                        src="/bulb.svg"
                        alt="bulb icon"
                        height={32}
                        width={32}
                      />
                    </div>
                    <div>
                      <h3 className="font-blog text-white font-bold pb-2">
                        Explore ideas together
                      </h3>
                      <p className="text-base text-texttwo">
                        Engage audience segments and finally create actionable
                        insights. Amplify vertical integration.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="bg-secondary min-w-14 h-14 rounded-full flex items-center justify-center">
                      <Image
                        src="/idea.svg"
                        alt="idea icon"
                        height={32}
                        width={32}
                      />
                    </div>
                    <div>
                      <h3 className="font-blog text-white font-bold pb-2">
                        Bring those ideas to life
                      </h3>
                      <p className="text-base text-texttwo">
                        Engage audience segments and finally create actionable
                        insights. Amplify vertical integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/video-banner.png"
                alt="video banner"
                height={420}
                width={640}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
