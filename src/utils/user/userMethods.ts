import { UserTypes } from '../../interfaces/user'
import { UserMethodsInterface } from './userMethods.interface'

class UserMethods implements UserMethodsInterface {

  public saveUser(user : UserTypes)  {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUser()  {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) as UserTypes : null
  }

  public removeUser() {
    localStorage.removeItem('user')
  }

}

export default new UserMethods()