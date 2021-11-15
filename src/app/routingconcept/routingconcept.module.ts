import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RoutingconceptComponent } from './routingconcept.component';
import { RoutingconceptRoutingModule } from './routingconcept-routing.module';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';



@NgModule({
  declarations: [
    RoutingconceptComponent,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    RoutingconceptRoutingModule
  ]
})
export class RoutingconceptModule { }
