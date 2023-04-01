import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { CustomvalidationService } from '../services/customvalidation.service';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  registerForm:FormGroup;
  hide = true;

  constructor(private fb:FormBuilder, private customValidator: CustomvalidationService) {
    this.registerForm = this.fb.group({
        name:[ '',[Validators.required]],
        username:[ '',[Validators.required]],
        email:[ '',[Validators.required,Validators.email]],
        contactNo:[ '',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern]],
        password:[ '',Validators.required],
        confirmPassword:[ '',[Validators.required]],
    }
    )
    console.log(this.registerForm.controls);
    
   }
  ngOnInit(): void {
  }

}
