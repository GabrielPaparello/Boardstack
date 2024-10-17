import React from "react";
import { Card } from "./Card";
import { api } from "@/lib/data/testimonial.data";
export const Testimonials = () => {
  return (
    <>
      <div className="dark:bg-dark-background bg-light-background  relative     flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-20 pt-7">
        <div className="absolute inset-0 dark:bg-dark-tertiary bg-light-tertiary opacity-70"></div>
        {api.map((data) => (
          <Card data={data} key={data.userName} />
        ))}
      </div>
    </>
  );
};
