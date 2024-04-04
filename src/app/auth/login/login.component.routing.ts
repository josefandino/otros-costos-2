import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

export const loginRouting: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '', component: LoginComponent
  }

]
