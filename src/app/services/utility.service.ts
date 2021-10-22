import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userName = new BehaviorSubject('Ashwani');
  
  constructor() { }

}
