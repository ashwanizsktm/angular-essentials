import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { Commp1Component } from './commp1/commp1.component';
import { Commp2Component } from './commp2/commp2.component';
import { Commp3Component } from './commp3/commp3.component';
import { Commp4Component } from './commp4/commp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { ComponentRoutingModule } from './component-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  declarations: [
    ComponentComponent,
    Commp1Component,
    Commp2Component,
    Commp3Component,
    Commp4Component,
    Comp5Component,
    ProductComponent
  ]
})
export class ComponentModule {
  constructor() {
    // console.log("Component Module called!");
  }
 }
