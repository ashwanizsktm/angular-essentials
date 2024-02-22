import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { LoggerService } from './logger.service';
import { ParentLoggerService } from './parentLogger.service';


@Component({
	selector: 'app-dependency',
	templateUrl: './dependency.component.html',
	styleUrls: ['./dependency.scss'],
	providers: [
		{provide: LoggerService, useClass:ParentLoggerService}
	]
})
export class DependencyComponent implements OnInit {
	/**
	 * Dependency injection in angular is a design pattern and a core feature of angular framework that facilitates
	 * the management and sharing components, services and other dependencies across other parts of an application.
	 */

	// here in example we are logging the service without injecting it but this is not singleton
	// the injector hierarchy works from bottom to to p, it looks for dependency in the existing component
	// if it doesn't found it move to top and so on and if it doesn't find at the root then it
	// throws the error called nullinjection/ no providers found.
	
	//  Root ==> app ==> component a == component b

	subscribe() {
		let sharedSrv = new SharedService();
		sharedSrv.logMsg();
	}

	constructor() { }
	ngOnInit(): void {
	}
}