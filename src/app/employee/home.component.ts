import { Component, OnInit,NgModule } from '@angular/core';
import {FormGroup,Validator,FormControl,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService, UserService } from '../_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:FormGroup
  gender:string;
  fullName:string;
  email:string;
  phoneNumber:string;
  contactPreference:string;
  disableGender:boolean;
  isEmail:boolean;
  submitted = false;
  alertService: any;
 
  constructor(private formBuilder:FormBuilder,
  private userService:UserService,
  private router: Router,
  ) {
    this.isEmail=true;
this.disableGender=false;

   }

   

  ngOnInit() {
   this.form  =this.formBuilder.group({
     fullName:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     phoneNumber:['',Validators.required],
     gender: ['', Validators.required],
     contactPreference:['',Validators.required]
   })
  }
  get f() { 
    return this.form.controls; 
  }
  saveEmployee(): void {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    debugger;
    var _User={
      Name: this.form.controls.fullName.value,
      Email:this.form.controls.email.value,
      Gender:this.form.value.gender,
      Preference:this.form.controls.contactPreference.value,
      Phone:this.form.value.phoneNumber
    }
    this.userService.CreateUser(_User)
    .pipe(first())
            .subscribe(
                data => {
                  alert('SUCCESS!! :-)')
                },
                error => {
                    this.alertService.error(error);
                    alert('Failed!! :-)')
                });

    
  }
}
