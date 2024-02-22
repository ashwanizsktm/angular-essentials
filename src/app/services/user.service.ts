import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class UserService {

	errMsg = "Error while calling API";

	constructor(private http: HttpClient,
		private route: ActivatedRoute) { }

	idx: any;

	getId(id: number) {
		return this.idx = id;
	}

	// getAllusers(){
	//   return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
	//     catchError((err) => {
	//      return this.errMsg = err;
	//     })
	//   )
	// }
	// this way we can handle error in service
	//  but this is not a good practice so refer error httpinterceptor
	// where error is getting handled globaly.

	// id = this.route.snapshot.params['id'];

	getAllusers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users')
	}

	getUser(id: any) {
		return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
	}
}


// return [
//   {id: 101, name: 'john', city: 'Delhi', salary:20000, dob: new Date("05/10/1989")},
//   {id: 102, name: 'rahul', city: 'Deharadun', salary:25000, dob: new Date("10/11/1991")},
//   {id: 101, name: 'jane', city: 'Dubai', salary:70000, dob: new Date("09/01/1972")},
//   {id: 101, name: 'peter', city: 'England', salary:40000, dob: new Date("07/23/1995")},
//   {id: 101, name: 'jacob', city: 'Maumbai', salary:50430, dob: new Date("09/03/1994")},
// ]
