import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeresPageRoutingModule } from './homeres-routing.module';

import { HomeresPage } from './homeres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeresPageRoutingModule
  ],
  declarations: [HomeresPage]
})
export class HomeresPageModule {}
