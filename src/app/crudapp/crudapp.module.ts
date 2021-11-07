import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudappRoutingModule } from './crudapp-routing.module';
import { CrudappComponent } from './crudapp.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CrudappComponent,
    ManageProductComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudappRoutingModule
  ]
})
export class CrudappModule { }
