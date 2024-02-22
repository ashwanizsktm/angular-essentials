import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyRoutingModule } from './dependency-routing.module';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { DependencyComponent } from './dependency.component';


@NgModule({
  declarations: [
    DependencyComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    DependencyRoutingModule
  ]
  
})
export class DependencyModule { }
