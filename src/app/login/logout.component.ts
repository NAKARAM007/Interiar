import { Component, OnInit } from '@angular/core';

import { Route,Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logour',
  templateUrl: './logout.component.html',
 // styleUrls: ['./employee.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private _router: Router) {
  }
  
  ngOnInit() {
  }
  onBackButtonClick() :void {
    this._router.navigate(['/login']);
   // localStorage.removeItem('access_token');
    //this._router.navigateByUrl('/login');
} 
}