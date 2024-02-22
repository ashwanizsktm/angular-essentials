import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor() { }

    public count = 0;
   
    logMsg() {
        console.log("Logging the message");
    }
}

