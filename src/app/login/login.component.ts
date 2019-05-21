import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService,UserService } from '../_services';
import { User } from '../_models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}


    ngOnInit() {
      debugger
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
      // reset login status
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .subscribe((_data:User) => {
      if(_data.Status==true)
      {
        this.router.navigate(["employees"]);
        
      }
      else{
        this.router.navigate([this.returnUrl]);
        this.alertService.error(_data.Message); 
      }
      this.loading = false;  
              },
              error => {
                this.loading = false;
                this.alertService.error(error);
                this.router.navigate([this.returnUrl]);
                  
              });
    
    // this.authenticationService.register("dff","1234")
    //     .pipe(first())
    //     .subscribe(
    //         data => {
                
    //              this.router.navigate(["employees"]);
    //         },
    //         error => {
    //             this.loading = false;
    //         });
}
}









