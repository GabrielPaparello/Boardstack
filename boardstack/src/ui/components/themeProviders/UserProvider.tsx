// src/lib/context/UserContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  userIdent: number | null | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  value,
  children,
}: {
  value: UserContextType;
  children: ReactNode;
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
