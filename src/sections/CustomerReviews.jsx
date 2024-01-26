import React from "react";
import { reviews } from "../constants/index";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers Says? </span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Delighted with my Nike Prady purchase! The fusion of style and comfort
        is spot-on. The cutting-edge cushioning tech makes every step a breeze.
        Special offers sweeten the deal. It's my go-to for fashion and function.
        Highly recommended!
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((items) => (
          <ReviewCard key={items.customerName} {...items} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
