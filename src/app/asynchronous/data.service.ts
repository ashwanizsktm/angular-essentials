import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService{
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient){}

  getDogs():Observable<any> {
    return this.http.get(`${this.API_URL}dogsData`).pipe(
      retry(1),
      catchError((err) => {
        console.log("api error",err.status, err.statusText);
        return err;
      }),
    )
  }

  getCats():Observable<any> {
    return this.http.get(`${this.API_URL}catsData`);
  }

  getOwner():Observable<any> {
    return this.http.get(this.API_URL+'humans')
  }
}
