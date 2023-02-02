import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonGrid } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServeiHHService } from '../servei-hh.service';



@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})

//@Injectable()
export class RegisterPage {

  dni: string;
  name: string;
  email: string;
  password: string;
  password2: string;
  res:any;
  error =false;

  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router) { }


  ngOnInit(): void { }



  registrar() {
     if (this.dni == null || this.dni == "" || this.name == null || this.name == "" || this.email == null || this.email == "" || this.password == null || this.password == "" || this.password2 == null || this.password2 == "") {
      var error = document.getElementById("iderror");
      error.style.display = "block";
      error.innerHTML = "Falten campos para rellenar";
    } else if (this.password != this.password2) {
      var error = document.getElementById("iderror");
      error.style.display = "block";
      error.innerHTML = "Las contraseñas no coinciden";
    }else{
      var error = document.getElementById("iderror");
      error.style.display = "none";
      error.innerHTML = "";

      //this.http.get('http://52.204.66.110/registrar.php?dni=' + this.dni + '&password=' + this.password + '&email=' + this.email + '&nom=' + this.name);
      
      

      this.serveiHH.registraruser(this.dni,this.password,this.email,this.name).subscribe((response) => {
        this.res = response

        if (this.res.resultat=='true'){
          this.router.navigate(['/login']);
        } else{
          this.error = true;
        }})
    }
  }
}