import React from "react";
import Location from "../../components/location/location";
import useScreenSize from "../../hooks/useScreenSize";
import "./home.scss";
import Promotions from "../../components/promotions/promotions";
import Categories from "../../components/categories/categories";
import MainHome from "../../components/mainHome/mainHome";
import Footer from "../../components/footer/Footer";




const Home = () => {
  const { width, height } = useScreenSize();
  console.log(`width: ${width}, height: ${height}`);

  return (
    <div className="bg-gradient-to-b from-white to-[#ffbc74] w-[100%] h-[800px] top-[-464px] left-[-214px] rounded-[35px] fondo">
      {/* This will disappear when the window is less than 500 pixels wide. */}
      {width >= 500 && <h1>Look at me</h1>}
      <Location />
      <Promotions />
      <Categories />
      <MainHome />
      <Footer/>
    </div>
  );
};

export default Home;
