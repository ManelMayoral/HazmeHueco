import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeiHHService } from '../servei-hh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'homeclientes.page.html',
  styleUrls: ['homeclientes.page.scss'],
})
export class HomePage {

  res: any;

  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router ) {}


  
  ngOnInit() {
    
    this.serveiHH.getrestaurants().subscribe((response) =>{
      this.res = response;
      console.log(this.res);
    });
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

  ferReserva(idRes){
    console.log(idRes);
    let x  = (<HTMLInputElement>document.getElementById("time"+idRes)).value;
    console.log(x);
    let x2  = (<HTMLInputElement>document.getElementById("qtt"+idRes)).value;
    console.log(x2);
    //this.router.navigate(['/reserva',nomRes]);
  }
}
