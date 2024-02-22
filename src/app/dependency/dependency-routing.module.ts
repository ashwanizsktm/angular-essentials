import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyComponent } from './dependency.component';
import { ChildAComponent } from '../routingconcept/child-a/child-a.component';
import { ChildBComponent } from '../routingconcept/child-b/child-b.component';

const routes: Routes = [
	{
		path: '',
		component: DependencyComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DependencyRoutingModule { }
