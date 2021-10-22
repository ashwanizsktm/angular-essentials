import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { EssentialsComponent } from './essentials.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from '../guards/auth.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminGuard } from '../guards/admin.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { UnsavedChangesGuard } from '../guards/unsaved-changes.guard';
import { ResolveGuard } from '../guards/resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: EssentialsComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        resolve: {
          data: ResolveGuard,
        },
      },

      {
        path: 'users/user/:id',
        component: UserComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AdminGuard],
        children: [
          // {path:'', redirectTo:'address', pathMatch: 'full'},
          { path: 'address', component: AddressComponent },
          { path: 'company', component: CompanyComponent },
        ],
      },
      {
        path: 'adduser',
        component: AdduserComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: 'location', outlet: 'maps', component: LocationComponent },
          { path: 'feedback', outlet: 'feeds', component: FeedbackComponent },
        ],
      },

      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssentialsRoutingModule {}
