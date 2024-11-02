export class DbConnection {
  static getProject(userId: number | null) {
    const url = `/api/projects/get?userId=${userId}`;
    return url;
  }
  static insertProject() {
    return "/api/projects/insert";
  }
  static deleteProject() {
    return "/api/projects/delete";
  }
  // CAMBIAR URL A VARIABLE DE ENTORNO
  static getUserUrl(userId: string | undefined | null) {
    const url = `http://localhost:3000/api/users/get?userId=${userId}`;
    return url;
  }

  static insertUser() {
    return "/api/users/insert";
  }
}
