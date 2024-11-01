"use client";
import { DbConnection } from "@/lib/services/url.db.services";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/ui/components/common/icons/Delete";
import { useUser } from "@auth0/nextjs-auth0/client";
const Project = async () => {
  interface Project {
    id: number;
    user_id: number | null;
    name: string;
    description: string | null;
    created_at: Date;
  }
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

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  // GET A LA DB DE LOS proyectos
  const fetchProjects = async () => {
    if (!userIdent) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(DbConnection.getProject(userIdent));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };
  // ELIMINAR DE LA DB proyectos
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(DbConnection.deleteProject(), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await fetchProjects();
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // POST A LA DB DE LOS proyectos
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(DbConnection.insertProject(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userIdent,
          name: nombre,
          description: descripcion,
          created_at: new Date(),
        }), // Aquí se elimina la variable `data`
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Proyecto insertado:", result); // Puedes usar el resultado aquí si lo deseas
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    } finally {
      setLoading(false);
    }

    (event.target as HTMLFormElement).reset();
  };

  return (
    <main className="flex text-lg text-black font-bold flex-col items-center gap-10 mt-10">
      <section className="flex flex-col items-center">
        <h3>Proyectos</h3>
        <p>Crea un nuevo proyecto</p>
      </section>
      <form
        className="flex flex-col bg-light-subtle dark:bg-dark-subtle rounded-lg p-2 min-w-[300px] max-w-[300px] gap-2 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <article className="flex flex-col items-center w-full max-w-md">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="p-2 w-full rounded-lg mt-5 bg-white border-2 border-bg-light-subtle"
            placeholder="Ingresa tu nombre"
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </article>

        <article className="flex flex-col items-center w-full max-w-md">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            className="p-2 w-full rounded-lg mt-5 bg-white border-2 border-bg-light-subtle resize-none"
            id="descripcion"
            name="descripcion"
            placeholder="Escribe una descripción aquí"
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </article>

        <button
          className="text-center mt-4 py-px px-4 bg-light-accent-primary dark:bg-dark-accent-primary rounded-lg"
          type="submit"
        >
          Enviar
        </button>
        {loading && <p>Loading...</p>}
      </form>

      <section className="flex items-center justify-center gap-5">
        {loading && <p>Loading...</p>}
        {!loading && projects.length === 0 && (
          <p>todavia no tenes proyectos, crea uno</p>
        )}
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex relative flex-col items-center justify-center gap-2 bg-light-accent-primary dark:bg-dark-accent-primary rounded-lg p-2">
              <div
                onClick={() => {
                  handleDelete(project.id);
                }}
              >
                <DeleteIcon className=" max-w-[30px] min-w-[30px] absolute -top-10 right-2 cursor-pointer" />
              </div>
              <p>Identificador: {project.id}</p>
              <p>Nombre: {project.name}</p>
              <p>Descripcion: {project.description}</p>
              <p>
                Fecha de creacion:
                {new Date(project.created_at).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                ,{" "}
                {new Date(project.created_at).toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <Link
                href={`/project/${project.id}`}
                className="text-center mt-4 py-px px-4 bg-light-accent-primary dark:bg-dark-accent-primary rounded-lg"
              >
                Go to project
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
export default Project;
