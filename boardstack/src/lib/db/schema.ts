// schema.ts

export interface Database {
  usuarios: {
    id: number;
    auth0_id: string;
    nombre: string | null;
    email: string;
  };
  amistades: {
    usuario_id: number;
    amigo_id: number;
  };
  proyectos: {
    id: number;
    usuario_id: number;
    nombre: string;
    descripcion: string | null;
    fecha_creacion: Date;
  };
  columnas: {
    id: number;
    proyecto_id: number;
    titulo: string;
    orden: number;
  };
  tareas: {
    id: number;
    columna_id: number;
    titulo: string;
    descripcion: string | null;
    orden: number;
    fecha_creacion: Date;
    fecha_vencimiento: Date | null;
  };
}
