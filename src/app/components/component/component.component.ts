import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ComponentComponent implements OnInit {
  message = "Greetings from parent"
  receivedMsg:any;
  userName: any;

  public salesProducts = [
    {id: 1, name: 'ACS', price: 100},
    {id: 2, name: 'Phones', price: 300},
    {id: 3, name: 'Fashion', price: 5500},
    {id: 4, name: 'Electornics', price: 900}
  ]

  public topProducts = [
    {id: 1, name: 'gadgets', price: 400},
    {id: 2, name: 'Furniture', price: 3900},
    {id: 3, name: 'cloths', price: 5100},
    {id: 4, name: 'shoes', price: 2000}
  ]


  constructor(private utility: UtilityService) {}

  ngOnInit() {
    this.utility.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  receiveDataFromChild(event: any){
   this.receivedMsg = event;
  }
}
