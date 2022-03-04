import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  errorEmailRegister:string = '';

  constructor(private _AuthService:AuthService , private _Router:Router) { }


  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null ,[ Validators.required , Validators.minLength(3) , Validators.maxLength(8)]) , 
    last_name:new FormControl(null ,[ Validators.required , Validators.minLength(3) , Validators.maxLength(8)]) , 
    age:new FormControl(null ,[ Validators.required , Validators.min(18) , Validators.max(80)]) , 
    email:new FormControl(null ,[ Validators.required , Validators.email]) , 
    password:new FormControl(null ,[ Validators.required , Validators.pattern(/[A-Za-z0-9]{8,}/)]) , 
  })

  submitRegister():void{
    this._AuthService.register(this.registerForm.value).subscribe(
      (response)=>{
        if(response.message == 'success') {
          this._Router.navigate(['/login'])
        } else {
          this.errorEmailRegister = 'Email is already Registered!!'
        }
      } , 
      (error)=>{
        console.log(error)
      } , 
      ()=>{
        console.log('Register Complete.....')
      }
    )
  }

  ngOnInit(): void {
  }

}
