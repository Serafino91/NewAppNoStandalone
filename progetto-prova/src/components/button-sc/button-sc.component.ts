import {Component, Input} from '@angular/core';

@Component({
  selector: 'button-sc',
  templateUrl: './button-sc.component.html',
  styleUrl: './button-sc.component.css'
})
export class ButtonScComponent {
  @Input() nomeButton: String='deafault';
  @Input() colorButton: String= 'orange'

}
