import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},

  {
    path: 'components',
    loadChildren: () => import('./components/component/component.module').then(m => m.ComponentModule)
  },

  {
    path: 'essentials',
    loadChildren: () => import('./essentials/essentials.module').then(m => m.EssentialsModule)
  },
  {
    path: 'asynchronous',
   loadChildren: () => import('./asynchronous/asynchronous.module').then(m => m.AsynchronousModule)
  },

  {
    path: 'crudapp',
     loadChildren: () => import('./crudapp/crudapp.module').then(m => m.CrudappModule)
  },

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
