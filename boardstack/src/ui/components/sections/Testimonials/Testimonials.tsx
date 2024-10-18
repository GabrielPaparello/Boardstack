import React from "react";
import { Card } from "./Card";
import { api } from "@/lib/data/testimonial.data";
export const Testimonials = () => {
  return (
    <>
      <div className=" dark:bg-dark-tertiary  bg-light-tertiary flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 py-7">
        {/* <div className="absolute inset-0 dark:bg-dark-tertiary bg-[#FFFFFF] opacity-100"></div> */}
        {api.map((data) => (
          <Card data={data} key={data.userName} />
        ))}
      </div>
    </>
  );
};
