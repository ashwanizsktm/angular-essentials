import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscriber, Subscription, Subject } from 'rxjs';
import {  filter } from 'rxjs/operators';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 // Create a feature module with routing
  //  with this cmd we can make feature module with lazy loading enabled with app routing.
  // ng generate module customers --route customers --module app.module
  constructor() {}

   ngOnInit() {}


 

}
