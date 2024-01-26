import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h2 className="mt-3 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Unlock Special Offers on <br />
            <span className=" relative z-10 pr-10 text-coral-red">
              Nike Prady <br />
            </span>
            Your Fusion of Style and Comfort!
          </h2>

          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm info-text max-w-lg">
            "Indulge in style and comfort with Nike Prady – now offering
            exclusive special deals! Elevate your every step with innovative
            design and savings waiting just for you. Seize the fusion of style
            and performance today!"
          </p>
          <div>
            <Button label="View Details" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
