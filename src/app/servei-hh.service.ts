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
  id = ""
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
    this.id = id
    return id
  }

  getreservas(){
    let url = `http://hazmehuecoionic.hopto.org/llistarreservas.php?idres=${this.id}`
    return this.http.get(url)
  }



}