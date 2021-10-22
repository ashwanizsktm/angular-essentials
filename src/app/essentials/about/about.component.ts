import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  mySubscription!: Subscription;
  constructor() {}
  ngOnInit(): void {

  }
}
