import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crudapp',
  templateUrl: './routingconcept.component.html',
  styleUrls: ['./routingconcept.component.scss']
})
export class RoutingconceptComponent implements OnInit {
  name: any;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // this.name = params['name'];
      // console.log(this.name);
      console.log(params);
    });
  }

}
