import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssentialsRoutingModule } from './essentials-routing.module';
import { EssentialsComponent } from './essentials.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationComponent } from './location/location.component';
import { AuthGuard } from '../guards/auth.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './contact/counter/counter.component';

@NgModule({
  declarations: [
    EssentialsComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    FeedbackComponent,
    LocationComponent,
    AddressComponent,
    CounterComponent,
    CompanyComponent,
    AdduserComponent
  ],
  imports: [
  CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EssentialsRoutingModule
  ],
})
export class EssentialsModule {
  constructor() {
    // console.log("EssentialsModule called!");

  }
 }
