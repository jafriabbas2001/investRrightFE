import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then((m) => m.Dashboard),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfolio/portfolio')
        .then((m) => m.Portfolio),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./features/accounts/accounts')
        .then((m) => m.Accounts),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/orders')
        .then((m) => m.Orders),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports')
        .then((m) => m.Reports),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings')
        .then((m) => m.Settings),
  },
  { path: '**', redirectTo: '' },
];
