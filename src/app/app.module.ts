import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

//3rd-party
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CookieService } from 'ngx-cookie-service';
//proj
import { GuardsService } from "./services/routeguards/guards.service";
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

registerLocaleData(zh);

const routes: Routes = [

  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "auth",
    component: AuthComponent
  }, {
    path: 'coolname',
    component: HomeComponent, data: { breadcrumb: "Proj-Base" },
    canActivate: [GuardsService],
    children: [
      // route sample
      { path: "", redirectTo: "/coolname/dash", pathMatch: "full" },
      { path: 'sample', component: SampleComponent, data: { breadcrumb: "Use Sample" }, canActivate: [GuardsService] },
      { path: 'dash', component: DashboardComponent, data: { breadcrumb: "Dashboard" }, canActivate: [GuardsService] }

      //{ path: '<path>', component: <refer to component>, canActivate: [<route guard service, if needed>] }

    ]
  }]

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DashboardComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, CookieService, GuardsService, { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
