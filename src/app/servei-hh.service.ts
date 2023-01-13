import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServeiHHService {

  loginat = false
  autenticado = false;
  idres = ""
  idcli = ""
  constructor(private router:Router, private http: HttpClient, public navCtrl: NavController) { }

  getloginat(){
    return this.loginat
  }

  sendloginat(loginado:any){
    this.loginat = loginado
  }

  consultaclient(email:any, pwd:any){
    let url =`http://hazmehuecoionic.hopto.org/comprovarusuaris.php?email=${email}&pwd=${pwd}`

    return this.http.get(url)
  }

  consultarestaurant(nomres:any,pwd:any){
    let url =`http://hazmehuecoionic.hopto.org/comprovarrestaurant.php?nomres=${nomres}&pwd=${pwd}`

    return this.http.get(url)
  }

  registraruser(dni:any,password:any,email:any,name:any){
    let url = `http://hazmehuecoionic.hopto.org/afegirusuari.php?dni=${dni}&password=${password}&email=${email}&nom=${name}`
      
    return this.http.get(url)
  }

  getidres(id:any){
    this.idres = id
  }

  getidcli(id:any){
    this.idcli = id
  }

  getreservasres(){
    let url = `http://hazmehuecoionic.hopto.org/llistareservesrestaurants.php?idres=${this.idres}`
    return this.http.get(url)
  }

  getreservascli(){
    let url = `http://hazmehuecoionic.hopto.org/llistareservesclients.php?idcli=${this.idcli}`
    return this.http.get(url)
  }

  getrestaurants(){
    let url =`http://hazmehuecoionic.hopto.org/llistarestaurants.php`

    return this.http.get(url)
  }

  confirmarreserva(id){
    let url =`http://hazmehuecoionic.hopto.org/confreserva.php?id=${id}`
    return this.http.get(url) 
  }

  cancelarreserva(id){
    let url =`http://hazmehuecoionic.hopto.org/cancelreserva.php?id=${id}`
    return this.http.get(url)
  }

  insertreserva(iduser, qttpersones , hora, idrestaurant){
    let url=`http://hazmehuecoionic.hopto.org/insertreserva.php?iduser=${iduser}&qttpersones=${qttpersones}&horares=${hora}&idres=${idrestaurant}`
    return this.http.get(url)
  }

}
