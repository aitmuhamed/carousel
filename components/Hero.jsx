import React from "react";
import homeGachuurtText from "../public/photo/homeGachuurttext.png";
import { Carousel } from "antd";

const text =
  "Whether you're looking for a spacious family home or a sleek and stylish living space. Our properties feature top-of-the-line finishes, premium appliances, and cutting-edge technology";
const Hero = ({ heading, message }) => {
  return (
    <>
      <Carousel dotPosition={"left"} style={{ height: "100%" }}>
        <div className="flex items-center justify-center h-screen bg-center snap-none custom-img"></div>
        <div className="flex items-center justify-center h-screen  bg-center snap-none custom-img"></div>
        <div className="flex items-center justify-center h-screen  bg-center snap-none custom-img"></div>
      </Carousel>
    </>
    // <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
    // <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
    // <div className='p-5 text-white z-[2] mt-[-10rem]'>
    // {/* <h2 className='text-5xl font-bold'>{heading}</h2> */}
    // {/* <button className='px-8 py-2 border'>Book</button> */}
    // {/* <p className='py-5 text-xl break-words'>{text}</p> */}
    // </div>
    // </div>
  );
};

export default Hero;
