import React, { createContext, useContext, ReactNode } from "react";

// UserContext.tsx (ejemplo)

export interface UserContextType {
  userIdent: number | null | undefined; // Permitir undefined
}

// Y luego ajustar tu UserProvider para que acepte ese tipo

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  value: UserContextType;
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({
  value,
  children,
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
