import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { forkJoin, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private user: UserService,
    private route: ActivatedRoute){}
  resolve(){
    // this is for maing a single api call.
     return this.user.getAllusers();

    //  this is for making multiple api calls...


    // return Observable.forkJoin(
    //   this.user.getAllusers(),
    //   this.user.getUser()
    // ).map((allResponses: any) => {
    //    return {
    //      A: allResponses[0],
    //      B: allResponses[1]
    //    };
    //  })

    // let id = this.route.snapshot.params['id'];

    // let a= this.user.getAllusers();
    //  let b= this.user.getUser(id);
    //  return forkJoin(a,b);
  }
}
