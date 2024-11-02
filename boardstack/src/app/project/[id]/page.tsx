"use client";
import { useParams } from "next/navigation";
import React from "react";

const Project2 = () => {
  const { id } = useParams();
  return <div>project{id}</div>;
};

export default Project2;
