import React from "react";
import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[48px] lg:max-w-md font-palanquin font-bold">
        Sign up from <span className="text-coral-red"> Updates </span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:boder sm:border-slate-gray rounded">
        <input
          type="text"
          placeholder="subscribe@prady.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
