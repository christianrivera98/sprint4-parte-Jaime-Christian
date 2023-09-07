import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

const Location = () => {
  return (
    <div>
      <section className="flex">
        <IconContext.Provider value={{ color: "#ffe031" }}>
          <FaMapMarkerAlt className="h-8 w-8 left-4 border-[1px] relative top-[0px]" />
        </IconContext.Provider>
        <div className="flex-col flex">
          <strong className="text-[#ffe031] relative w-[54px] h-3 top-0 left-4 text-[10px] leading-[11.72px] text-center whitespace-nowrap">
            DELIVER TO
          </strong>
          <span className="relative w-[146px] h-4 top-[0px] left-[11px] text-[14px] leading-[16.41px] text-center text-[#414141]">
            882 Well St. New-York
          </span>
          <IoIosArrowDown className="relative w-[11px] top-[-15px] left-[153px] border-[1px]" />
        </div>
      </section>
    </div>
  );
};

export default Location;
