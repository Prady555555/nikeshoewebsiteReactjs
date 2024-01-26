import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full border-2  p-2 flex xl:flex-row flex-col justify-center min-h-screen  max-container gap-10 pb-7 "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-3 font-palanquin text-8xl max-sm:text-[70px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block xl:mt-1 pt-2 z-10 sm:mt-0">
            Nike Shoes
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-2">
          Elevate your stride with Nike: where innovation meets style, and every
          step is a testament to performance excellence.
        </p>
        <Button label="show More" iconUrl={arrowRight} />
        <div className="flex flex-row justify-start items-start flex-wrap w-full mt-10 gap-16 p-2">
          {statistics.map((index) => (
            <div key={index.label}>
              <p className="font-palanquin max-sm:text-xl">{index.value}</p>
              <p className="font-montserrat max-sm:xl:">{index.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1  flex justify-center lg:min-h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="mainShoe"
          width={400}
          height={400}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6 z-10  ">
          {shoes.map((item) => (
            <div key={item}>
              <ShoeCard
                imgUrl={item}
                changeBigShoeImage={(iteam) => setBigShoeImg(iteam)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
