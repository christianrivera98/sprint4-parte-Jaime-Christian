import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import start4 from "../../../assets/Stars4.png";
import './InfoRestaurant.scss'

export const InfoRestaurant = () => {
  const { activeRestaurant: restaurant } = useSelector(
    (state) => state.foodApp
  );

  const { id, title, imageURL, description, formState } = useForm(restaurant);

  return (
    <>
      <h1 className="restaurant-title"> {title} </h1>
      <div className="info-container">
        <img className="restaurant-img" src={imageURL} alt={id} />
        <div className="description-stars-container">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="stars-time-container">
            <img
              src={start4}
              alt="stars"
              className="stars"
            />
            <p className="time">15-20 min</p>
          </div>
        </div>
      </div>
    </>
  );
};
