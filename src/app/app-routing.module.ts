import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';

export const routes: Routes = [
  { path: 'operations', component: OperationsComponent },
  { path: '', redirectTo: 'operations', pathMatch: 'full' },
  { path: 'operationsHistory', component: OperationsHistoryComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
