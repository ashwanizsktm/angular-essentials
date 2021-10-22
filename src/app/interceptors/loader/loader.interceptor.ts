import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // 1. first useful seninario.
    //  this code is for global loader while API call anywhere in component loader will run
    // when request success then it stops.

    this.loader.show();
    return next.handle(request).pipe(map(event => {
      if (event instanceof HttpResponse) {
         this.loader.hide();
      }
      return event;
    }));
  }
}
