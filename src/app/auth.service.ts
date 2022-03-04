import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';

import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') != null) {
      this.setUserDate();
    }
   }


  userData = new BehaviorSubject(null);


  setUserDate():void {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken);

  }

  register(userData:any):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , userData)
  }

  login(userData:any):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , userData)
  }

  logout():void{
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }

}