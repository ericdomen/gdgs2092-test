import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuPrincipal = [
    { icon : 'home', name: 'Inicio', route: 'home' },
    { icon : 'article', name: 'Catálogo', route: '', submenu: [
      { icon : 'manage_accounts ', name: 'Usuarios', route: 'admin/users' },
    ] }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
