import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/root/root.module').then(m => m.RootModule),
    canActivate: [AuthGuard]
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
export class AppRoutingModule {
}
