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

  nomreserva :any;
  res :any
  conf :any
  error = false
  id : any;

  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router  ) { }

  ngOnInit() {
    this.getreservas();
    this.serveiHH.getidres(this.id);

  }

 getreservas(){
  this.serveiHH.getreservas().subscribe((response) => {
    this.res = response
    this.id = this.res.restaurantID
    this.nomreserva = this.res.nomComplet
    this.conf = this.res.confirmada
    console.log(this.res)
    if (this.res==null){
      this.error = true;
    }
  })
 }

 clickSegment(pagina) {
  //console.log(pagina);
  var pagina1 = document.getElementById("pagina1");
  var pagina2 = document.getElementById("pagina2");

  if (pagina == 1) {
    //console.log("reservas");

    pagina1.style.display = "block";
    pagina2.style.display = "none";
  } else if (pagina == 2) {
    //console.log("restaurantes");

    pagina1.style.display = "none";
    pagina2.style.display = "block";
  }
}

  getidres(id:any){
    this.id = id
    return id
  }
}
