import React from "react";
import "./categories.scss";
import burgerIcon from "../../assets/burgerIcon.png";
import pizzaIcon from "../../assets/pizzaIcon.png";

const Categories = () => {
  return (
    <div>
      <h3 className="absolute w-[138px] h-4 top-[170px] left-4 text-[14px] leading-[16.41px] text-center whitespace-nowrap">
        Restaurants and cafes
      </h3>
      <nav className="categoriesTypes absolute w-[454px] h-8 top-[200px] left-4 flex">
        <a
          href="#"
          className="flex bg-[#ffe031] w-[106px] h-8 top-[0px] left-0 rounded-[5px] text-center text-[10px] leading-[11.72px] text-[#6c6c6c] items-center justify-center"
        >
          All
        </a>
        <a
          href="#"
          className="flex bg-[#f2f2f2] w-[106px] h-8 top-[0px] mx-4 rounded-[5px] text-center text-[10px] leading-[11.72px] text-[#6c6c6c] items-center justify-center"
        >
          <img
            src={burgerIcon}
            className="relative flex w-4 h-4 left-[-12px]"
          />
          Fast food
        </a>
        <a
          href="#"
          className="flex bg-[#f2f2f2] w-[106px] h-8 top-[0px] mx-0 rounded-[5px] text-center text-[10px] leading-[11.72px] text-[#6c6c6c] items-center justify-center"
        >
          <img src={pizzaIcon} className="relative flex w-4 h-4 left-[-12px]" />
          Pizza
        </a>
      </nav>
    </div>
  );
};

export default Categories;
