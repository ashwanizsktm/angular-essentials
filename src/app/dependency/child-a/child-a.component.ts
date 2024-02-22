import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
	selector: 'app-child-a',
	templateUrl: './child-a.component.html',
	styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
	// sharedSrv = new SharedService();
	// this shared service in child-a and child b is not giving the same value as it is not singleton
	// we are creating a new instance the service with new keyword.
	// Dependency injection allows us to decouple the instance creation i.e the manual instance creation is 
	//not required. 
	constructor(private sharedSrv: SharedService) { }

	ngOnInit(): void {
	}

	increase() {
		this.sharedSrv.count++;
	}

	print() {
		console.log("count in child a==", this.sharedSrv.count)
	}
}