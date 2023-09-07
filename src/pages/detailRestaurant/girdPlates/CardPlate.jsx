import React from "react";
import './GridPlates.scss';
import { useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";

export const CardPlate = ({imageURL= '', id = '', price = '', title = ''}) => {

// const { activePlates: plate } = useSelector(
//     (state) => state.foodApp
//   );

//   const { id, title, imageURL, price } = useForm(plate);
  return (
    <div className="card">
      <img src={imageURL} alt={id} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};