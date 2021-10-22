import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-commp2',
  templateUrl: './commp2.component.html',
  styleUrls: ['./commp2.component.scss']
})
export class Commp2Component implements OnInit {
  userName: any;
  constructor(private utility: UtilityService) {

   }
  ngOnInit(): void {
    this.utility.userName.subscribe(uname => {
      this.userName = uname;
    })
  }
  updateUserNane(uname: any) {
    this.utility.userName.next(uname.value)
    }
}
