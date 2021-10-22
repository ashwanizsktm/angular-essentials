import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsConceptsComponent } from './rxjs-concepts/rxjs-concepts.component';
import { RxjsConceptsAComponent } from './rxjs-concepts-a/rxjs-concepts-a.component';
import { RxjsConceptsBComponent } from './rxjs-concepts-b/rxjs-concepts-b.component';

const routes: Routes = [
  { path: '', component: RxjsConceptsComponent },
  { path: 'rxjsa', component: RxjsConceptsAComponent },
  { path: 'rxjsb', component: RxjsConceptsBComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsynchronousRoutingModule { }
