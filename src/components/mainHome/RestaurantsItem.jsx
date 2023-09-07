import React from 'react'
import start4 from "../../assets/Stars4.png";
import { setActivePlates, setActiveRestaurant } from '../../store/foodApp/foodAppSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RestaurantsItem = ({title = '', imageURL = '',subtitle ='', description= '', id , price = ''}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const onClickRestaurant = () => {
        dispatch(setActiveRestaurant ({id, title, subtitle, description, imageURL}));
        dispatch(setActivePlates({id, title, price, imageURL}));
        navigate('/restaurant-details');
    }

  return (
    <section
    
    onClick={onClickRestaurant}
     className="flex relative w-[348px] h-[106px] top-[140px] left-4 rounded-[10px] bg-white mb-4">
         <img
           src={imageURL}
           className="flex absolute w-[134px] h-[108.02px] top-0 left-[1px]"
         />
         <h3 className="flex absolute w-[140px] h-4 top-[10px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
           {title}
         </h3>
         <img
           src={start4}
           alt="stars"
           className="flex absolute left-[147px] w-[68px] h-3 top-[30px]"
         />
         <p className="flex absolute w-[139px] h-4 top-[50px] left-[147px] text-[14px] leading-[16.41px] tracking-[-0.3px] text-center text-[#414141]">
           Work time 09:30 - 23:00
         </p>
         <p className="flex absolute w-[57px] h-3 top-[70px] text-[10px] leading-[11.72px] tracking-[-0.3px] text-center text-[#a7a7a7] left-[147px]">
           Before you <span className="cost text-[#414141] ml-[2.5px]">4$</span>
         </p>
       </section>
  )
}
