import React from "react";
import "./mainHome.scss";
import { useSelector } from "react-redux";
import { RestaurantsItem } from "./RestaurantsItem";

const MainHome = () => {

  const {restaurant} = useSelector ( state => state.foodApp);


  return (
    <div>

      {

        restaurant.map ( restaurant => (
          <RestaurantsItem key={restaurant.id} {...restaurant} />
        ))
         
      }

     
    
    </div>
  );
};

export default MainHome;
