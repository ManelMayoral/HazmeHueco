import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { ServeiHHService } from '../servei-hh.service';

@Component({
  selector: 'app-menusup',
  templateUrl: './menusup.component.html',
  styleUrls: ['./menusup.component.scss'],
})
export class MenusupComponent implements OnInit {

  constructor(private router:Router , public serveiHH : ServeiHHService) { }

  ngOnInit() {}
    
  gologin(){
    this.router.navigate(['/login']);
  }
  }