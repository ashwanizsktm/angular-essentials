import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedBlackDirective } from './directive/red-black.directive';
import { HighlightDirective } from './directive/highlight.directive';
// import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AgePipe,
    RedBlackDirective,
    HighlightDirective,
    // LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AgePipe,
    RedBlackDirective,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule
    // LoaderComponent
  ]
})
export class SharedModule {
  constructor() {
    // console.log("SharedModule called!");
  }
 }
