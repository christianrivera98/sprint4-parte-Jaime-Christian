// import React from 'react'


// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import '../../pages/slider/sliderHome.scss';

// import img1 from '../../assets/Svg(1).png';
// import img2 from '../../assets/Svg(2).png';
// import img3 from '../../assets/Svg.png';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination} from 'swiper/modules';

// const navigate = useNavigate();


// const Slider = () => {

//   const onLastNext = () => {
//     navigate('/home');
//   }
//   return (
//     <div className='slider'>
//       <Swiper
//       modules={[Navigation, Pagination,]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation={{
//         nextEl: '.next', // Utiliza una clase CSS personalizada
//         prevEl: null,
//       }}
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       >
//       <SwiperSlide>
//         <img src={img3} alt='Choose' className='img1' />
//         <p>Choose what to eat choosing from a variety of restaurants from the list</p>
//         <button className='next' onClick={() => handleNextButtonClick()}>Next</button>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={img1} alt='choose' className='img2'/>
//         <p>Choose where you want to deliver by indicating on the map</p>
//         <button className='next' onClick={() => handleNextButtonClick()}>Next</button>
//       </SwiperSlide>
//       <SwiperSlide >
//         <img src={img2} className='img3'/>    
//         <p>We will deliver as soon as possible</p>
//         <button className='next' onClick={ onLastNext}>Next</button>
//       </SwiperSlide>
//     </Swiper>
      
//     </div>
//   )
// }

// export default Slider
