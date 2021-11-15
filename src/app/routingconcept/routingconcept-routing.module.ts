import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { RoutingconceptComponent } from './routingconcept.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path: '', component: RoutingconceptComponent},
  { path: 'first-component', component: FirstComponent,
    children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      component: ChildBComponent, // another child route component that the router renders
    }]
  },
  { path: 'second-component', component: SecondComponent }, // redirect to `first-component`
  { path: '**', component: RoutingconceptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingconceptRoutingModule { }
