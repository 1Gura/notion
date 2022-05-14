import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/root/root.module').then(m => m.RootModule)
  },
  {
    path: 'authorization',
    loadChildren: () => import('./components/authorize/authorize.module').then(m => m.AuthorizeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
