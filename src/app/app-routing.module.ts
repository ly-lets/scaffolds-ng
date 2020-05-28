import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RouteGuardsService } from './services/route-guards/route-guards.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserAccessComponent } from './user-access/user-access.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'nga',
    component: HomeComponent,
    canActivate: [RouteGuardsService],
    children: [
      {
        path: 'access',
        component: UserAccessComponent,
        canActivate: [RouteGuardsService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
