import React from "react";
type CounterTypes = {
  text: string;
  number: string;
  numberClass: string;
};

const Counter = ({ text, number, numberClass }: CounterTypes) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <h3
          className={`counter-text font-extrabold font-montserrat ${numberClass}`}
        >
          {number}
        </h3>
        <div className={`font-extrabold font-montserrat text-[25.2px] leading-none absolute top-0 -right-3.5 ${numberClass}`}>
          +
        </div>
      </div>
      <div className="pt-0.5 text-blacklight font-l-line uppercase font-bold tracking-tight">
        {text}
      </div>
    </div>
  );
};

export default Counter;
