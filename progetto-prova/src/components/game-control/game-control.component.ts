import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {


  @Output() intervalloEmesso  = new EventEmitter<number>();
  lastNumber=0;
  interval;

  onStartGame(){
    this.interval = setInterval(() =>{

      this.intervalloEmesso.emit(this.lastNumber+1);
      this.lastNumber++;
    } ,1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
