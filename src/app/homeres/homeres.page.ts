import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeiHHService } from '../servei-hh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeres',
  templateUrl: './homeres.page.html',
  styleUrls: ['./homeres.page.scss'],
})
export class HomeresPage implements OnInit {

  res :any
  error = false

  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router  ) { }

  ngOnInit() {
    this.getreservas();
  }

 getreservas(){
  this.serveiHH.getreservas().subscribe((response) => {
    this.res = response
    console.log(this.res)
    if (this.res==null){
      this.error = true;
    }
  })
 }
}
