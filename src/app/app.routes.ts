import { Routes } from '@angular/router';
import { DogsBookListComponent } from './dogs-book/dogs-book-list/dogs-book-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsBookListComponent },
  { path: 'details/:index', loadComponent: () => import('./dogs-book/dogs-book-detail-view/dogs-book-detail-view.component').then(c => c.DogsBookDetailViewComponent)}
];
