import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsynchronousRoutingModule } from './asynchronous-routing.module';
import { RxjsConceptsAComponent } from './rxjs-concepts-a/rxjs-concepts-a.component';
import { RxjsConceptsBComponent } from './rxjs-concepts-b/rxjs-concepts-b.component';
import { RxjsConceptsComponent } from './rxjs-concepts/rxjs-concepts.component';


@NgModule({
  declarations: [
    RxjsConceptsComponent,
    RxjsConceptsAComponent,
    RxjsConceptsBComponent
  ],
  imports: [
    CommonModule,
    AsynchronousRoutingModule
  ]
})
export class AsynchronousModule { }
