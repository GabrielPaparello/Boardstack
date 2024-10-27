"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect } from "react";

const Project = () => {
  const { user, isLoading, error } = useUser();
  const user_id = user?.sub?.split("|")[1];

  useEffect(() => {}, []);

  return (
    <>
      <h3>Projects</h3>
      <p>{user?.sub}</p>
      <p>{user_id}</p>
    </>
  );
};
export default Project;
