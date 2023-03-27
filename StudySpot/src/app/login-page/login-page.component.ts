import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'loginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {

 
  // loginDetails={
  //   username:'',
  //   password:''
  // }
  getData:any={}
  form:FormGroup;
  constructor(public UserServiceService: UserServiceService,
              public fb: FormBuilder,
              private _snackBar: MatSnackBar) {
    // this.form = this.fb.group({
    //   username: [''],
    //   password: [''],

      this.form = new FormGroup({
         username: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
         password: new FormControl(  '',  [Validators.required])
      })
      
    // });
    console.log(this.form.controls)
    console.log(this.form.controls
      +"contols print")
  }

  get formData() {
     return this.form.controls;
   };

   validateForm() { 

    for(let i in this.form.controls)
        this.form.controls[i].markAsTouched();
    }

   onSubmit(user: any){
    console.log("login is clked")
    console.log(user)
    if(this.form){

    }
  }

  ngOnInit(): void {

   
    
  }

  // loginUser(){

  //   this.UserServiceService.getUserData(this.loginDetails.username,this.loginDetails.password)
  //   .subscribe((res)=>{
  //     this.getData =res
  //     console.log(res)
  //   })
      
  // }
 
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';

}




}
