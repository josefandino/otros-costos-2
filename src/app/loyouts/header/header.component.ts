import { Component, OnInit } from '@angular/core';
import { AngularModule, MaterialModule } from '../../shared/modules';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    AngularModule,
    MaterialModule
  ],
})
export class HeaderComponent implements OnInit{

  userLocal = localStorage.getItem('user');
  usuario: any = 'User'

  ngOnInit(): void {
    // this.usuario = JSON.parse(this.userLocal ?? 'User') || {};
  }

}
