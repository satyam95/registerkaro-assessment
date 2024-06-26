import Image from "next/image";
import React from "react";

const MobileAppPlugin = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto">
        <div className="pt-6">
          <div className="flex w-full items-center">
            <div className="w-2/5">
              <h2 className="font-h2-letter font-extrabold text-white pb-6">
                Manage Your Services by your Mobile Phone
              </h2>
              <p className="font-l-letter text-texttwo">
                Download our app to manage and track your services. Our app
                enables you to stay in touch with our experts and aids you in
                tracking your progress.
              </p>
              <div className="pt-[52px]">
                <div className="text-base leading-[28px] font-medium text-white">
                  Get the App
                </div>
                <div className="pt-3 pb-16">
                  <div className="flex">
                    <Image
                      src="/apple-appstore.svg"
                      alt="apple app store"
                      width={187}
                      height={80}
                    />
                    <Image
                      src="/google-playstore.svg"
                      alt="google app store"
                      width={187}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/5 relative h-full max-h-[491px]">
              <Image
                src="/phone-app-new.png"
                alt="phone image"
                height={787.11}
                width={647.92}
                className="-mb-2.5 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPlugin;
