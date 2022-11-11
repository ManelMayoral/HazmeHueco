import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'homeclientes.page.html',
  styleUrls: ['homeclientes.page.scss'],
})
export class HomePage {

  constructor() {}


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
}
