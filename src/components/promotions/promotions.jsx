import React from "react";
import "./promotions.scss";
import promo1 from "../../assets/promo1.png";

const Promotions = () => {
  return (
    <div>
      <section className="relative w-[259px] h-20 top-[10px] left-4">
        <img src={promo1} />
      </section>
    </div>
  );
};

export default Promotions;
