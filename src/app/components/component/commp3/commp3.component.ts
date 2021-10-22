import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-commp3',
  templateUrl: './commp3.component.html',
  styleUrls: ['./commp3.component.scss']
})
export class Commp3Component implements OnInit {
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
