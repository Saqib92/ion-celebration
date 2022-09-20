import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'ion-celebration',
  templateUrl: 'ion-celebration.html',
  styleUrls: ['ion-celebration.scss']
})
export class IonCelebrationComponent implements OnInit {

  @Input() time: number = 5000;
  @Input() name:string = "";

  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start(){
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, this.time);
  }

}
