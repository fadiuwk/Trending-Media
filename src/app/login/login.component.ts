import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorLogin:string = ''
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[ Validators.required , Validators.email]) , 
    password:new FormControl(null ,[ Validators.required ]) 
  })


  submitLogin():void{
    this._AuthService.login(this.loginForm.value).subscribe(
      (response)=>{
        if(response.message == 'success') {
          localStorage.setItem('userToken' , JSON.stringify(response.token))
          this._AuthService.setUserDate()
          this._Router.navigate(['/home'])
        } else {
          this.errorLogin = 'somthing is Wrong!!'
        }
      } , 
      (error)=>{
        console.log(error)
      } , 
      ()=>{
        console.log('Login Complete.....')
      }
    )
  }
  
  ngOnInit(): void {
  }

}
