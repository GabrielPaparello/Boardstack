import React from "react";
import { Card } from "./Card";
import { api } from "@/lib/data/testimonial.data";
export const Testimonials = () => {
  return (
    <>
      <div className="dark:bg-dark-tertiary bg-light-tertiary flex flex-col lg:flex-row items-center justify-center gap-3 pt-7">
        {api.map((data) => (
          <Card data={data} key={data.userName} />
        ))}
      </div>
    </>
  );
};
