import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeiHHService } from '../servei-hh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginado=false;
  esclient=true;
  nomres='';
  pwd='';
  idres = '';
  idcli = '';
  email='';
  res :any;
  error = false;
  constructor(private http: HttpClient, public serveiHH : ServeiHHService,private router:Router) { }

  ngOnInit() {
  }

  login(xesclient){
    if(xesclient){
      this.serveiHH.consultaclient(this.email, this.pwd).subscribe((response) => {
        this.res = response
        this.idcli = this.res.id 
        console.log(this.res)
        if (this.res.resultat=='true'){
          sessionStorage.setItem("idusr",this.idcli)
          this.router.navigate(['/homeclientes']);
        } else{
          this.error = true;
        }
      })
      this.serveiHH.sendloginat(this.loginado = true)
    }else{
      this.serveiHH.consultarestaurant(this.nomres, this.pwd).subscribe((response) => {
        this.res = response
        this.idres = this.res.id
        console.log(this.res)
        if (this.res.resultat=='true'){
          sessionStorage.setItem("idres",this.idres)
          this.router.navigate(['/homeres']);
          this.serveiHH.getidres(this.res.id);
        } else{
          this.error = true;
        }})
      this.serveiHH.sendloginat(this.loginado = true)
    }
  }

  goregister(){
    this.router.navigate(['/register'])
  }

}
