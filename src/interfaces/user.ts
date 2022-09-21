export interface UserTypes {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}

export interface UpdateUserTypes {
  firstname: string;
  lastname: string;
  email: string;
  description: string;
  password?: string;
}


