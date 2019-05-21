import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService,UserService } from '../_services';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../_models/user';
import { resolve } from 'url';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  _user:User[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
  }

  getUser()
  {
    this.userService.getAll().pipe().subscribe(data => { 
      this._user =data;
  },
  error => {
    this.alertService.error(error);
    this.loading = false;
}
)
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.update()
        .subscribe(
            (data:User) => {
                 this.router.navigate(["employees"]);
               // this.router.navigate([this.returnUrl]);
            },
            (error:any) => {
                this.alertService.error(error);
                this.loading = false;
            },

          );
 }
}
