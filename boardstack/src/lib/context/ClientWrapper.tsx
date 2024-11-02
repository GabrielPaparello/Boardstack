// ClientWrapper.tsx
"use client";
import React from "react";
import { UserProvider } from "@/lib/context/UserContext";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ClientWrapper;
