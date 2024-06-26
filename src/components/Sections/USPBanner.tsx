import Image from "next/image";
import React from "react";
import USPCard from "../USPCard";

const USPBanner = () => {
  return (
    <section className="bg-secondary">
      <div className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-14 items-center justify-center">
            <USPCard
              icon="/form.svg"
              altText="form icon"
              bgColor="#EB5757"
              text="Fill up Application Form"
            />
            <USPCard
              icon="/payment.svg"
              altText="payment icon"
              bgColor="#27AE60"
              text="Make Online Payment"
            />
            <USPCard
              icon="/executive.svg"
              altText="executive icon"
              bgColor="#F2994A"
              text="Executive will Process Application"
            />
            <USPCard
              icon="/mail.svg"
              altText="message icon"
              bgColor="#828282"
              text="Get Confirm Mail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPBanner;
