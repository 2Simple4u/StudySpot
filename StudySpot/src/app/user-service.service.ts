import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {username,password} from 'src/app/login-page/login-data'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 

  constructor(private http:HttpClient) { }

  // getUserData(username,password){
  //   return this.http.get('localhost://8080/'+username+'/'+password);
  // }
}
