import { Injectable } from '@angular/core';
import {
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from '../essentials/adduser/adduser.component';

export interface canComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<canComponentLeave> {
  canDeactivate(component: canComponentLeave) {
    if (component.canLeave) {
      return component.canLeave();
    } else {
      return true;
    }
  }
}
