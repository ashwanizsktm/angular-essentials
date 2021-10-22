import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  // definition
  // 1. interceptors are unique type of angular service that we can implement to intercept incoming or
  // outgoing HTTP requests using the HttpClient.
  // it can be used in following senarios
  /*
   1. Modifying HTTP headers
   2. Modifying the request body
   3. Set authentication/authorization token
   4. Mock the backend API
   5. Modify the responses
   6. Error handling.
   */

   constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const API_KEY = 'test123';
    const req = request.clone({
      setHeaders: {
        API_KEY,
      }
    })
    return next.handle(req);
  }
}





