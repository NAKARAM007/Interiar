import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatMenuModule,MatIconModule ,MatListModule,MatSidenavModule,
   MatToolbarModule, MatCheckboxModule} from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import { MDBBootstrapModule } from 'angular-bootstrap-md';
 // import {PolymerElement, html} from '@polymer/polymer';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { __decorate } from "tslib";
// import { __metadata } from "tsl”;
import {SlideshowModule} from 'ng-simple-slideshow';
// import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

// import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';


import {CommonModule  } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing} from './app.routing';
// import { HomeComponent } from './employee/home.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutItemComponent } from './about/about-item/about-item.component';
import { EmployeeComponent } from './employee/employee.component';

import { NotfoundComponent } from './employee/notfound.component';
import { LogOutComponent } from './login/logout.component';
import { WelcomeComponent } from './employee/welcome.component';
import { RegisterComponent } from './register';
// import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives';
import { AlertService, AuthenticationService, UserService } from './_services';
import { JwtInterceptor, ErrorInterceptor,fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    AboutItemComponent,
    WelcomeComponent,
    NotfoundComponent,
    LogOutComponent,
    AlertComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
  BrowserModule,routing,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  SlideshowModule,
  MDBBootstrapModule,
  AngularFontAwesomeModule,
  MDBBootstrapModule.forRoot()
  ],
 // y schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ // AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



