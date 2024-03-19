import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personal',
    title: 'personal',
    loadComponent: () => import('../compt/personal/personal.component'),
  },
  {
    path: 'access',
    title: 'access',
    loadComponent: () => import('../compt/access/access.component'),
  },
  {
    path: 'confirmation',
    title: 'confirmation',
    loadComponent: () => import('../compt/confirmation/confirmation.component'),
  },
  {
    path: 'login',
    title: 'login',
    loadComponent: () => import('../compt/login/login.component'),
  },
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  { path: '**', redirectTo: 'personal' },
];
