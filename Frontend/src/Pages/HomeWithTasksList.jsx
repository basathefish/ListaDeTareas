import React from "react";
import { AddButton } from "../component/AddButton";
import { Head } from "../component/Head";
import { TareaCard } from "../../TareaCard";
import { Sort } from "../component/Sort";

export const HomeWithTasksList = () => {
  return (
    <div className="bg-[#121212] flex flex-col items-center w-full min-h-screen">
      <div className="bg-[#121212] w-[1280px] h-[832px] relative">
        {/* Header Section */}
        <header className="flex w-full items-center justify-center absolute top-[13px] px-4">
       
          <div className="relative w-[46.54px] h-[42px] ml-16">
            <Sort className="absolute left-0 top-[9px]" />
          </div>
          <Head className="w-[184.77px]" />
        </header>

        {/* Add Button */}
        <AddButton className="absolute left-[50%] top-[84px] transform -translate-x-1/2" />

        {/* Task Card */}
        <TareaCard className="absolute left-[61px] top-[246px]" />
      </div>
    </div>
  );
};

export default HomeWithTasksList;