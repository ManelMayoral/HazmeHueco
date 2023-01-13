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
  resclient: any;

  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router ) {}

  ngOnInit() {
    this.serveiHH.getidcli(sessionStorage.getItem("idusr"));

    this.serveiHH.getrestaurants().subscribe((response) =>{
      this.res = response;
      console.log(this.res);
    });

    this.serveiHH.getreservascli().subscribe((response) =>{
     this.resclient = response;
     console.log(this.resclient); 
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

  cancreserva(idreserva:any){
    this.serveiHH.cancelarreserva(idreserva).subscribe((response)=>{
      this.res = response
    })
    if(this.res=="true"){
      this.ngOnInit();
    } else{
      console.log("error")
    }
   }

  ferReserva(idRes){
    let hora  = (<HTMLInputElement>document.getElementById("time"+idRes)).value;
    let qtt  = (<HTMLInputElement>document.getElementById("qtt"+idRes)).value;
    console.log("Hora: "+hora, "Qtt: "+qtt)
    if(hora.length>5 && parseInt(qtt) > 0 && parseInt(qtt) <= 15){
      this.serveiHH.insertreserva(sessionStorage.getItem("idusr"),qtt,hora,idRes).subscribe((response)=>{})
      this.ngOnInit();
    }
    else {
      alert("Introdueix una hora vàlida i una quantitat entre 1 i 15")
    }
  }
}