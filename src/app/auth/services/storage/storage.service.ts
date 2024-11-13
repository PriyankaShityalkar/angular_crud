import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public saveUser(user:any)
  {
    window.localStorage.setItem("user", JSON.stringify(user))
  }

  public getUser()
  {
    let user = window.localStorage.getItem("user")
    if(user!=null)
    {
      return JSON.parse(user)
    }
  }

  public getToken()
  {
    let user = this.getUser()
    if(user!=null)
    {
      return user.token
    }
  }

  public saveToken(token:any)
  {
    window.localStorage.setItem("token", token)
    this.saveToken(token)
  }

  public getRole()
  {
    let user = this.getUser()
    if(user!=null)
    {
      return user.role
    }
  }

}
