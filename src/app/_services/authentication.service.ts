import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { Route } from '../../../node_modules/@angular/compiler/src/core';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json'})
};
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
        private router:Router
    ) { }

    login(username: string, password: string):Observable<User>{
        debugger
        return this.http.post<User>(`${environment.apiUrl}/AuthenticateUser`,{Name:username,Password:password},httpOptions)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.Name) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
               // localStorage.setItem('currentUser', JSON.stringify(user));
               sessionStorage.setItem('currentUser', JSON.stringify(user));
                                                                                                                                                                                                      
            }

            return user;
        }));
        
    }
IsLogin(): Boolean{
  let current= JSON.parse(sessionStorage.getItem('currentUser'));
  if(current!=null)
  {
    return true;
  }
  sessionStorage.removeItem('currentUser');
  this.router.navigate(["/login"]);
}
    logout() {
        // remove user from local storage to log user out
       // localStorage.removeItem('currentUser');
       sessionStorage.removeItem('currentUser');
    }
    
    register(Name:string,Passwoer:string) {
        var _user = {
            Name: "user1",
            Password:"123"
        }
        return this.http.post(`${environment.apiUrl}/aPost`,_user,httpOptions);
   
    }
    update() {
             return this.http.put(`${environment.apiUrl}/Put`, httpOptions);
         }

        
}