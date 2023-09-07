import React from 'react'
import { InfoRestaurant } from './main/InfoRestaurant'
import CategoryCarousel from './main/CategoryCarousel.jsx';
import { GridPlate } from './girdPlates/GridPlate';


export const RestaurantDetails = () => {



  return (
    <>
       <InfoRestaurant/>
       <CategoryCarousel/>
       <GridPlate/>
    </>
  )
}
