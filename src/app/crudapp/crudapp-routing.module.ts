import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudappComponent } from './crudapp.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
  { path: '', component: CrudappComponent },
  { path: 'manageproducts', component: ManageProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudappRoutingModule { }
