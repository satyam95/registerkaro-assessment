import React from "react";
import Counter from "../Counter";

const CounterBlock = () => {
  return (
    <section>
      <div className="container mx-auto text-yellowlight font-sm">
        <div className="py-16">
          <div className="text-center pb-1.5">1% OF THE INDUSTRY</div>
          <h2 className="text-center font-bold font-h2-dark text-copper">
            Welcome to your new digital reality. Now.
          </h2>
          <div className="pt-14 flex justify-around items-center">
            <Counter
              text="Customers"
              number="1M"
              numberClass="counter-style-2"
            />
            <Counter
              text="Years of Excellence"
              number="12"
              numberClass="counter-style-1"
            />
            <Counter
              text="R&D Engineers"
              number="41"
              numberClass="counter-style-2"
            />
            <Counter
              text="Countries"
              number="78"
              numberClass="counter-style-2"
            />
            <Counter
              text="PARTNERS"
              number="3287"
              numberClass="counter-style-2"
            />
            <Counter
              text="Awards Received"
              number="41"
              numberClass="counter-style-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterBlock;
