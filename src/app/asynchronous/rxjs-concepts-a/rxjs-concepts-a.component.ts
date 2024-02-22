import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, from, fromEvent, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mergeMap, shareReplay, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-rxjs-concepts-a',
	templateUrl: './rxjs-concepts-a.component.html',
	styleUrls: ['./rxjs-concepts-a.component.scss']
})
export class RxjsConceptsAComponent implements OnInit {

	users = [
		{ id: 1, name: 'Ashwani', isActive: true },
		{ id: 2, name: 'jack', isActive: true },
		{ id: 3, name: 'mike', isActive: true }
	];

	users$ = of(this.users);

	// All the rxjs operator
	// map
	userName$ = this.users$.pipe(map((users) => users.map(user => user.name)));

	//filter 
	filteredUser$ = this.users$.pipe(filter((users) => users.every((user) => user.isActive)));

	// Behaviour subject
	user$ = new BehaviorSubject<{ id: number, name: string } | null>(null);

	// fromEvent
	documentClick$ = fromEvent(document, 'click');

	// combine Latest
	data$ = combineLatest([
		this.users$,
		this.userName$,
		this.filteredUser$
	]).pipe(map(([users, userName, filteredUser]) => ({
		users,
		userName,
		filteredUser
	})));

	constructor(private http: HttpClient) { 
		const example = (operator: any) => () => {
			from([0,1,2,3,4])
			.pipe(operator((x:any) => of(x).pipe(delay(500))))
			.subscribe(
				console.log,
				() => {},
				() => console.log(`${operator.name} completed`)
			);
		};

		example(exhaustMap)();
		// switch these map to see the behaviour
		// mergeMap / flatMap ==> it will be executed when all the strems are completed(order doesn't matter)
		// whoever the stream is completed first that'll be return first then rest it'll be executed directly
		// concatMap => it'll be completed but the stream are completed in order one by one
		// switchMap => it'll be called after last sterms are called here only last stream are executed and all
		//  the other strems are canceled.
		// exaustMap => here only the first streams are executed and all the other streams are canceled.
	}


	ngOnInit(): void {
		this.documentClick$.subscribe(e => {
			console.log(e, 'event');
		});

		setTimeout(() => {
			this.user$.next({ id: 1, name: 'Ashwani' });
		}, 1000);

		this.shareReplayMagic();
	}

	// shareReplay :- once we subscribe one observable more than once then the network call happen twice
	// to reduce that we use share replay let's see the below example.
     
	shareReplayMagic() {
		const obs$ = this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(shareReplay());
				            
		obs$.subscribe((data) => {
			console.log(data);
		})

		obs$.subscribe((data:any) => {
			console.log(data.title);
		})
	}
}
