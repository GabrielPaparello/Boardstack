export class DbConnection {
  static getProject(userId: number | undefined | null) {
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
    const url = `/api/users/get?userId=${userId}`;
    return url;
  }

  static insertUser() {
    return "/api/users/insert";
  }
}
