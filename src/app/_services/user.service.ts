import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { NG_ASYNC_VALIDATORS } from '../../../node_modules/@angular/forms';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json'})
};
@Injectable()
export class UserService {
   
    constructor(private http: HttpClient) { }

    getAll():Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/Getlogin`)
        .pipe();
    }
private errorHandle(errorResponce:HttpErrorResponse)
{
    if(errorResponce.error instanceof ErrorEvent)
    {
        console.error("this is client side error ",errorResponce.error.message)
    }
    else
    { 
        console.error("this is server side error ",errorResponce.error)
     }
     //return throwError("please try after sometime");
}
    // getById(id: number) {
    //     return this.http.get(`${environment.apiUrl}/users/` + id);
    // }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    // update(user: User) {
    //     return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${environment.apiUrl}/users/` + id);
    // }
    CreateUser(User:any) {
        
        return this.http.post(`${environment.apiUrl}/CreateUser`,User,httpOptions);
   
    }
}