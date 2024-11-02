// UserContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DbConnection } from "@/lib/services/url.db.services";

interface UserContextType {
  userIdent: number | null | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const userId = user?.sub?.split("|")[1];

  const [userIdent, setUserIdent] = useState<number | null | undefined>(null);

  useEffect(() => {
    const InsertUser = async () => {
      if (!userId) {
        return;
      }
      try {
        const response = await fetch(DbConnection.insertUser(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            name: user?.name,
            email: user?.email,
            created_at: new Date(),
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} `);
        }
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
      }
    };
    const fetchUser = async () => {
      await InsertUser();
      {
        if (!userId) {
          setUserIdent(null);
          return;
        }
        try {
          const response = await fetch(DbConnection.getUserUrl(userId));
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setUserIdent(data[0]?.id || null);
        } catch (error) {
          console.error("Error al hacer la solicitud:", error);
        }
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <UserContext.Provider value={{ userIdent }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
