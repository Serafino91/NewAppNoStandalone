import {Component, Input} from '@angular/core';

@Component({
  selector: 'odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
@Input() odd: number;
}
