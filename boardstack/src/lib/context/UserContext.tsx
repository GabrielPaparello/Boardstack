import React, { createContext, useContext, ReactNode } from "react";

interface UserContextType {
  userIdent: number | null;
}

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
