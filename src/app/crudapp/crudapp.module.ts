import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudappRoutingModule } from './crudapp-routing.module';
import { CrudappComponent } from './crudapp.component';
import { ManageProductComponent } from './manage-product/manage-product.component';


@NgModule({
  declarations: [
    CrudappComponent,
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    CrudappRoutingModule
  ]
})
export class CrudappModule { }
