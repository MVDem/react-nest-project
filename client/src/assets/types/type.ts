export interface IStateUser {
  user: IinitialStateUser;
}

export interface IinitialStateUser {
  token: string;
  id: number | null;
  email: string | null;
  roles: string[] | null;
}

export interface IStateProjects {
  projects: IinitialStateProjects;
}

export interface IinitialStateProjects {
  projects: Project[] | null;
}

export interface UserDecoded {
  email: string;
  id: number;
  roles: Role[];
}

export interface Role {
  value: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  сompanyName: string;
  avatar: string;
  banned: boolean;
  banReason: string;
  roles: Role[];
  projects: Project[];
}

export interface Project {
  id: number | undefined;
  name: string | undefined;
  adress: string | undefined;
  plcs: Plc[] | undefined;
}

export interface Plc {
  id: 1;
  name: string;
  url: string;
  system: string;
}
