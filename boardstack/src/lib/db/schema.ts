// schema.ts

export interface Database {
  users: {
    id?: number;
    auth0_id: string;
    name: string | null;
    email: string;
    created_at: Date;
  };
  friendships: {
    user_id: number;
    friend_id: number;
  };
  projects: {
    id?: number;
    user_id: number;
    name: string;
    description: string | null;
    created_at: Date;
  };
  columns: {
    id: number;
    project_id: number;
    title: string;
    order_num: number;
  };
  tasks: {
    id: number;
    column_id: number;
    title: string;
    description: string | null;
    order_num: number;
    created_at: Date;
    due_date: Date | null;
  };
}
