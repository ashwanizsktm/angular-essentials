import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { SharedService } from '../shared.service';
import { LoggerService } from '../logger.service';
import { ChildLoggerService } from '../childLogger.service';

@Component({
	selector: 'app-child-b',
	templateUrl: './child-b.component.html',
	styleUrls: ['./child-b.component.scss'],
	providers:[
		{
			provide: LoggerService, useClass: ChildLoggerService
		}
	]
})
export class ChildBComponent implements OnInit {
	// sharedSrv= new SharedService();

	constructor(private sharedSrv: SharedService,
		// @Self() private loggerSrv: LoggerService
		@SkipSelf() private loggerSrv: LoggerService
		// @Optional() private loggerSrv: LoggerService
		// @Host() private loggerSrv: LoggerService
		) { }

	// comment providers to see the changing result.

	// resolution modifier
	// if there is no resolution provider added in the constructor it will work default
	// look for the dependency in the hirarchy on the top level and go to parent component and so on.

	/**
	 *  @Self :- it will only look dependency(provider) in the component ifself if it will not found it'll throw
	 * an error.
	 *  @SkipSelf : - it is just opposite to the @self it'll look for dependency in parent even if 
	 *  the dependency is present in the component itself.
	 *  @Optional : - it's optional it'll remove the nullinjection error but it'wont work
	 *  @Host :-  it will look for the dependency for host component (directive)
	 *  even when dependency are availale in parent or root module still it throws an error.
	*/

	// Dependency provider: - Dependency provider have an important role in dependency injection
	// it is a configuration that tells dependency injection on how to create instances for an services,
	// components and so on
	 // these are
	 /**
	  * useClass
	  * useFactory
	  * 
	  */


	log() {
		this.loggerSrv.log("button is clicked")
	}


	ngOnInit(): void {
	}

	increase() {
		this.sharedSrv.count++;
	}

	print() {
		console.log("count in child B==", this.sharedSrv.count)
	}

	
}
