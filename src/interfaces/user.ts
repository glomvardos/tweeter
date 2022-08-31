export interface UserTypes {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserTypes {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}


