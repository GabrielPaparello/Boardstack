import { DbConnection } from "@/lib/services/url.db.services";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ProjectUi } from "@/ui/components/software/project/Project";
const Project = async () => {
  const { user } = useUser();
  const userId = user?.sub;

  const fetchUser = async () => {
    if (!userId) return null; // Maneja el caso donde userId no está disponible
    try {
      const response = await fetch(DbConnection.getUserUrl(userId));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data[0]?.id || null;
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
      return null;
    }
  };

  const userIdent = await fetchUser();

  return <ProjectUi userIdent={userIdent} />;
};
export default Project;
