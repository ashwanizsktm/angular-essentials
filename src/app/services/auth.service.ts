import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  get isLoggedIn() {
  // logics which either will retrun true or false.
    // return false;
    return true;
  }

  get isAdminRole() {
    // logics which either will retrun true or false.
      // return false;
      return true;
    }
}
