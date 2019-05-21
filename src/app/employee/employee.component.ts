import { Component, OnInit,NgModule } from '@angular/core';

import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService,UserService } from '../_services';
import { User } from '../_models/user';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentUser: User;
  
  users: User[] = [];
  constructor(private userService:UserService,
    private authenticationService:AuthenticationService
  )
   {
    
    this.authenticationService.IsLogin();
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
  }
  
}
