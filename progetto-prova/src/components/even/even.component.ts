import {Component, Input} from '@angular/core';

@Component({
  selector: 'even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input() even:number;

}
