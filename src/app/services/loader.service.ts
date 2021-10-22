import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }
  public loading = false;

  show(){
  return this.loading = true;
  }
  hide(){
   return this.loading = false;
  }
}
