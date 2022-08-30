import { UserTypes } from '../../interfaces/user'

export interface UserMethodsInterface {
  saveUser(user: UserTypes): void;
  getUser(): UserTypes | null;
  removeUser(): void;
}