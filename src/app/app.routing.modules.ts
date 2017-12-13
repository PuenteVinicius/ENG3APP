import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path:'',  
      component: LoginComponent
  },
  { path:'login',
      component: LoginComponent
  },
  { path:'home',
      component: HomeComponent
  }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}