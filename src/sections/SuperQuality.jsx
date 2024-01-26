import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-3 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <br />
          <span className=" relative z-10 pr-10 text-coral-red">
            Prady Shoes
          </span>
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm info-text max-w-lg">
          Introducing the Nike Prady – a fusion of style and performance. With
          cutting-edge cushioning technology, the Prady ensures comfort meets
          innovation. Designed for those who embrace an active lifestyle, this
          shoe adds a touch of contemporary flair to your every step. Nike's
          commitment to pushing boundaries is evident in the Prady, a versatile
          addition to their lineup that promises both comfort and style for all.
        </p>
        <div>
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={570} />
      </div>
    </section>
  );
};

export default SuperQuality;
