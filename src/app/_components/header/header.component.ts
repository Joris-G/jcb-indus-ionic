import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  public menu_items =[{menuName:'Actions',url:'/login',color:'danger'}, {menuName:'Users',url:'/home', color:'secondary'}, {menuName:'Paramètres',url:'/login', color:'primary'}];
  
  constructor() { }

  ngOnInit() {
    console.log('test onInit');
  }
ionViewWillEnter(){
  console.log('test view');
}

}
