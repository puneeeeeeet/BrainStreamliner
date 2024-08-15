import React from "react";
import { Icon } from "./icon/icon";
import { Guideance } from "../icons/Guideance";
import { Girl } from "../icons/Girl";
import { WorkShop } from "../icons/WorkShop";
import { SmartClass } from "../icons/SmartClass";

const WhyChoose = () => {
  return (
    <div className="bg-[#FFF8DB] pb-20 text-[#543310]">
      <div className="flex items-center justify-center text-3xl sm:text-5xl font-customFont
       underline underline-offset-2 pt-20 font-bold text-[#7d8abc] animate-fadeinup">
        Why Choose Us
      </div>

      <div className="flex items-center justify-center p-20">
        <div className="text-xl  text-center w-72 ">
          Psychopedia promises you to bring the best teaching methods and
          enhance your well-being
        </div>
      </div>

      <div className="flex items-center justify-center flex-col  sm:flex-row px-8 gap-6">
        <div className="sm:w-80 w-full  h-96 flex items-center justify-center  flex-col 
        border-4 border-white  rounded-md hover:animate-bounce">
          <Icon icon={Guideance} color="blue" className="w-24 h-24">
            Image
            {/* IMAGE */}
          </Icon>
          <div className="text-2xl py-5  font-semibold">
            Guest Lectures
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'sof type and
          </div>
        </div>

        <div className="sm:w-80 w-full  h-96 flex items-center justify-center  
        flex-col border-4 border-white rounded-md hover:animate-bounce">
          <Icon icon={SmartClass} className="w-24 h-24  ">
            {/* IMAGE */}
          </Icon>
          <div className="text-2xl py-5  font-semibold">
            Smart Class Room
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'sof type and
          </div>
        </div>

        <div className="sm:w-80 w-full  h-96 flex items-center justify-center  
        flex-col border-4 border-white rounded-md hover:animate-bounce">
          <Icon icon={WorkShop} className="w-24 h-24" size="large">
            {/* IMAGE */}
          </Icon>
          <div className="text-2xl py-5  font-semibold">
            
            Training and Workshops
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'sof type and
          </div>
        </div>

        <div className="sm:w-80 w-full  h-96 flex items-center justify-center 
        flex-col border-4 border-white rounded-md hover:animate-bounce">
          <Icon icon={Girl} className="w-24 h-24 " color="blue">
            {/* IMAGE */}
          </Icon>
          <div className="text-2xl py-5 font-semibold ">
          
            Councelling & Guidence
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'sof type and
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
