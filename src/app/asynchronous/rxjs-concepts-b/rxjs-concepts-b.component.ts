import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { asyncScheduler, from, fromEvent, interval, Observable, of, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { map, share, shareReplay, filter, scan, take, debounceTime, debounce, throttleTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'app-rxjs-concepts-b',
	templateUrl: './rxjs-concepts-b.component.html',
	styleUrls: ['./rxjs-concepts-b.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RxjsConceptsBComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		//  observable

		/**
		   *  let sources$ = new Observable((observer) => {
			 observer.next('A');
			 observer.next('B');
			 // complete will stop emitting values
			 observer.complete();
			 observer.next('C');
		   });
		   sources$.subscribe(res => {
			   this.print(res);
		   })
		 */

		// of
		/**
		 * 	const hello = of ('hello');
			hello.subscribe(this.print)
		 */
	

		// from
		/*
			const world = from([1,2,3,4]);
			world.subscribe(this.print)
         */

		//  map  filter take scan
		/*
			const source$ = from([1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]);
			const modified =  source$.pipe(
			map((n:any) => n*2),
			//   scan((acc, val) => acc + val),  //this works as a reduce and gives the last 2 added values.
			filter((n: any) => n > 10),
			take(2)   // this says that after 2 values it has got to be completed
			);
			modified.subscribe(this.print);
		*/

		// fromEvent.
		/**
		 * 	const event = fromEvent(document, 'click');
			event.subscribe(this.print)
		 */
	
		// periodic
		/**
		 * 	const periodic = interval(1000);
			periodic.subscribe(this.print);
		*/

		// asyncscheduler
		// here it is working as a synchronous as main thread works
		// we can make asyncrounous with asyncscheduler
		/*
			const hello = of('Hello', asyncScheduler);
			hello.subscribe(this.print)
			this.print('world');
		*/	

		// Hot vs cold
		const cold$ = new Observable(o => o.next(Math.random()));

		// both subscriber will return different values, there will
		// cases when it has got to return the same value.
		// cold$.subscribe(this.print)
		// cold$.subscribe(this.print)

		// to make it multicast we use shareReplay operator
		// const hot = cold$.pipe(shareReplay());
		// hot.subscribe(this.print)
		// hot.subscribe(this.print)

		// to make this easy we use subject
		// the only thing is it as the same implementation
		// it has next method

		// const cold1$ = new Subject();
		// cold1$.subscribe(this.print);
		// cold1$.subscribe(this.print);
		// cold1$.next((Math.random()))    //as a data consumer

	   /*
			const subject$ = new Subject();
			// subscriber 1
			subject$.subscribe(res => {
			this.print('subscriber 1 => ', res);
			});

			subject$.next('value A');
			subject$.next('value B');
			subject$.next('value C');

			// subscriber 2
			subject$.subscribe(res => {
			this.print('subscriber 2 => ', res);
			});

			subject$.next('value D');
			subject$.next('value E');
	   */

		// if there is not next values are emitting after 2nd
		// subscriber then the second subscriber will not get
		// the value else if there is any then it will get values.

		// in the above example the second subscriber will get
		// the value D and Value E
		// . to overcome this we use behaviour subject.

		// behaviour subject
		/*
			const bs = new BehaviorSubject('Ashwani');
			bs.subscribe(res => {
			this.print('subscriber 1 => ', res);
			});
			bs.next("john");
			bs.next("jane");
			bs.subscribe(res => {
			this.print('subscriber 2 => ', res);
			});
			bs.subscribe(res => {
			this.print('subscriber 3 => ', res);
			});
		*/

		// this is the benifit  which we were not getting in the subject
		// here even though the 2nd and 3rd subscriber is coming late
		// still they are able to get the value, the only last emitted value Jane


		// replay subject
		// it returns the last n values which we pass here.
		// in below example it will return 1 values.
		// but after subscribe if we emit new values that will
		// get emitted in.

		// summary here it will emit the just last n observable
		// what is here just before subscribe, and it will again
		// emit the values after subscribe.

		/**
		 *  const $message = new ReplaySubject(1);
			$message.next("Hello.");
			$message.next("How are you?");
			$message.next("From where are you?");
			$message.next("Stay at home");
			$message.subscribe(msg => this.print(`Subscriber1: ${msg}`));
			$message.next("new Tech...");
			$message.next("Angular...");
			$message.next("React...");
			$message.subscribe(msg => this.print(`Subscriber2: ${msg}`));
			$message.next("after second..");
		*/
		  
		// Async Subject
		// is is similar like promises.
		/*
			const asyncSubject$ = new AsyncSubject();
			asyncSubject$.next("value 1");
			asyncSubject$.next("value 2");
			asyncSubject$.next("value 3");
			asyncSubject$.complete();
			asyncSubject$.next("value 4");
			asyncSubject$.next("value 5");
			// it will ignore the last call after method complete.
			asyncSubject$.subscribe(d => this.print(`subscriber : ${d}`));
		*/
		// note:- AsyncSubject never emits the value untill and unless we call complete method.
		// it always returns the last emitted value. no matter how many subscriber we have.
		// when we have a requirement of returning single value then it can be used.

		// debounce, throttletime,
		/**
		 *  debounce is useful for something like a type ahed where we don't want to make a api call
		 	unless user is done typing. we put delay after each key stroke till that user would have been
		 	done tying then make an api call.
		*/
		/*
		 const event = fromEvent(document, 'click');
		 const debounced = event.pipe(debounceTime(1000));
		 debounced.subscribe(this.print)
		*/
		// alternative to debounce is throttle.

		// const event = fromEvent(document, 'click');
		// const throttled = event.pipe(throttleTime(3000));
		// throttled.subscribe(this.print)

		// switchmap
		// it is useful when user is searching something in searchbar, user typed something and in other
		// moment he just cheanged his mind to search for something else. in that case the prevouus
		// things he has searched for that http call (observable) will get cancelled, and the latest
		// will get called/
		
		let obs1$ = fromEvent(document, 'click');
		let obs2$ = interval(1000);
		
		/*
		  obs1$.subscribe(
		    (event) => obs2$.subscribe(
		      (value) => {
		        this.print(value);
		     })
		  )
	    */

		//  in above code there is an issue after every click new call is happening
		//  so to prevent that and make to work like this whenever we click the currunt
		// execution will stop and the next will start. there comes the switchMap.

		//  obs1$.pipe(switchMap((event) => {
		//    return obs2$
		//  })).subscribe(value => this.print(value));

		//  stirter syntex.
		// obs1$.pipe(switchMap(() => obs2$)).subscribe(value => this.print(value));
	}

	print(val: any, title?: any) {
		let container = document.getElementById('parent') as HTMLElement;
		let el: HTMLElement = document.createElement('p');
		el.classList.add('para');
		if (title == undefined) {
			el.innerText = val;
		} else {
			el.innerText = val + title;
		}
		container.appendChild(el);
	}
}
