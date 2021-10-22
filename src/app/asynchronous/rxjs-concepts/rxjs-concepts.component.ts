import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, Subject, Subscription, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { map, filter, switchMap, retry } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-rxjs-concepts',
  templateUrl: './rxjs-concepts.component.html',
  styleUrls: ['./rxjs-concepts.component.scss']
})
export class RxjsConceptsComponent implements OnInit, OnDestroy {

  cats: any;
  dogs!:Observable<any[]>;
  doglenght: any;
  favCat: any;
  humans!: Observable<any[]>;
  users: any;
  userone: any;
  subscription!: Subscription;

  @ViewChild('parentRef') parentRef!: ElementRef
  constructor(private dataservice : DataService) { }

  ngOnInit() {

   //  cats API call
     // this is normal call
    // this.subscription = this.dataservice.getCats().subscribe(res => {
    //   this.cats = res;
    // })

   // here we will use map operator to mutate the the api response
    // before even subscribing it. it's very usefull isn't it.
    // so here we are getting cats api response with the help map
    // we will mutate the name of cat we'll add my pat before.

   this.subscription = this.dataservice.getCats().pipe(map((res:any) => res.map((data:any)=>{
      return {
        id: data.id,
        name: 'pat - ' + data.name,
        imgSrc: data.imgSrc
      }
    }))).subscribe(res => {
     console.log(res);
     this.cats = res;
    })

   this.favCat = this.dataservice.getCats().pipe(map(item => item[1].name));

  //  dogs
   this.dogs = this.dataservice.getDogs();
   this.doglenght = this.dataservice.getDogs().pipe(map(x => x.length));

  //  in both above 2 api calls we are subscribing the call twice
  // so in the network calls we see it is getting called as many
  // time as we calling but this is not the good thing for sure.
  // Idealy it should not make api calls more than once, it should
  // make only one call and we can subscribe it as many times as we want
  // for this we use subject. see here is humans api exapmle.
    // humans
   this.humans = this.dataservice.getOwner();

   const subject = new Subject();
   // subscriber 1
  subject.subscribe(d => this.users = d);
   //  subscriber 2
  subject.subscribe((d : any)=> {
    this.userone = d[0].name;
  });

  this.humans.subscribe(subject);  //working as a consumer


  // lets combine all the observable api calls with dog and cat here,
  const multiArr = [this.subscription,  this.dogs];
  let multiCall = forkJoin(multiArr);

  // console.log(multiCall[0]);

  multiCall.subscribe(res => {
    console.log(res);
  }, err => {
    console.log(err)
  }
  )
  }


  // it's the best practice to distroy the api call when component distroys.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


