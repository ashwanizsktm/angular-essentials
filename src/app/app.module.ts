import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { LoggingInterceptor } from './interceptors/loader/logging.interceptor';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS,useClass: LoaderInterceptor,multi: true},
    { provide: HTTP_INTERCEPTORS,useClass: HeaderInterceptor,multi: true},
    { provide: HTTP_INTERCEPTORS,useClass: LoggingInterceptor,multi: true},
    { provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor,multi: true},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
