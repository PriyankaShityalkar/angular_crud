import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(data:any):Observable<any>
  {
    return this.http.post(BASEURL+"/api/service/login", data)
  }

  public register(data:any):Observable<any>
  {
    return this.http.post(BASEURL+"/api/service/create-normal-user", data)
  }

  public getUser():Observable<any>
  {
    return this.http.get(BASEURL+"/api/service/get-all-user")
  }

  public getUserById(id:any):Observable<any>
  {
    return this.http.get(`${BASEURL}/api/service/get-user/${id}`)
  }

  public updateUser(data:any):Observable<any>
  {
    return this.http.put(BASEURL+"/api/service/update-user", data)
  }

  public deleteUser(id:any): Observable<any>{
    return this.http.delete(`${BASEURL}/api/service/delete-user/${id}`)
  }
}
