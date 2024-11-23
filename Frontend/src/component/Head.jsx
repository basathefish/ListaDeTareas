import React from "react";
import vector from "../assets/Images/vector.svg";



export const Head = ({ className }) => {
  return (
    <div
      className={`flex w-[185px] items-center justify-between relative ${className}`}
    >
      <div className="relative w-[55.7px] h-[60px]">
        <img
          className="absolute w-[47px] h-[43px] top-2 left-1"
          alt="Vector"
          src={vector}
        />
      </div>

      <div className="relative w-[129.07px] [font-family:'Lato-Regular',Helvetica] font-normal text-portage text-[32px] text-center tracking-[-0.50px] leading-5">
        Todo List
      </div>
    </div>
  );
};
