import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCelebrationComponent } from './ion-celebration.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    IonCelebrationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IonCelebrationComponent
  ]
})
export class IonCelebrationModule { }
