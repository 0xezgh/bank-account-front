import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent } from './operations/operations.component';
import { LoginComponent } from './login/login.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './guard/auth.service';
import { RoleGuard } from './guard/role.guard';

export const routes: Routes = [
 
    { path: 'login', component: LoginComponent },
    { path: 'operations', canActivate: [AuthGuard], component: OperationsComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'operationsHistory', canActivate: [AuthGuard], component: OperationsHistoryComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404' }
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
