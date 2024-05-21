import { AccountGuard } from './account/account.guard';
import { AccountPage } from './account/account.page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then((m) => m.AccountPage),
    canActivate: [AccountGuard]

  },
];
