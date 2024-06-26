import Image from "next/image";
import React from "react";

const ClientsSection = () => {
  return (
    <section>
      <div className="py-16">
        <div className="pb-16">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="max-w-[800px] w-full">
                <h2 className="pb-4 text-center font-h2 text-cyanblue font-bold">
                  Our Happy Clients
                </h2>
                <p className="text-[#666666] text-base text-center">
                  Professionally cultivate one-to-one customer service with
                  robust ideas. Dynamically innovate resource-leveling customer
                  service for state of the art customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/clients2.svg" alt="clients" width={1440} height={357} />
        <div className="pt-8 flex items-center justify-center">
          <button className="text-tertiary font-m font-semibold flex gap-1.5 items-center">
            Show more
            <Image
              src="/right-arrow-color.svg"
              alt="right icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
