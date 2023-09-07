import React from 'react'
import './GridPlates.scss';
import { useSelector } from 'react-redux';
import { CardPlate } from './CardPlate';


export const GridPlate = () => {

  const {plates} = useSelector(state => state.foodApp);


    return (
    <>
    
        <div className="card-grid">
        {plates.map((plate) => (
          <CardPlate key={plate.id} {...plate} />
        ))}
      </div>
    </>
  );
}
