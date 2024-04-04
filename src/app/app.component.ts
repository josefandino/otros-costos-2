import { Component, inject } from '@angular/core';

import { AngularModule, MaterialModule } from './shared/modules';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/store/auth.reduce';
import { SidebarComponent } from "./loyouts/sidebar/sidebar.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './auth/login/login.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        AngularModule,
        MaterialModule,
        StoreModule,
        SidebarComponent,
        LoginComponent

    ]
})
export class AppComponent {
  title = 'otros-costos';

  private readonly _router =  inject(Router);
  constructor() {}

  esRutaLogin(): boolean {
    return this._router.url === '/login';
  }
}
