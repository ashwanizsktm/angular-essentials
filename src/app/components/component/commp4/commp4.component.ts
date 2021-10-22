import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-commp4',
  templateUrl: './commp4.component.html',
  styleUrls: ['./commp4.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Commp4Component implements OnInit {
  userName: any;
  constructor(private utility: UtilityService) {
   }

  ngOnInit(): void {
    this.utility.userName.subscribe(uname => {
      this.userName = uname;
    })
  }
  updateUserName(uname: any) {
  this.utility.userName.next(uname.value)
  }
}
