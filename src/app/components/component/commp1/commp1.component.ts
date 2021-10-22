import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-commp1',
  templateUrl: './commp1.component.html',
  styleUrls: ['./commp1.component.scss']
})
export class Commp1Component implements OnInit {

  userName: any;
  constructor(private utility: UtilityService) {

   }
  ngOnInit(): void {
    this.utility.userName.subscribe(uname => {
      this.userName = uname;
    })
  }

  updateUserNane(uname: any) {
    this.utility.userName.next(uname.value);
  }
}
