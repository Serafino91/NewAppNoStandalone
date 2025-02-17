import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button-sc',
  templateUrl: './button-sc.component.html',
  styleUrl: './button-sc.component.css',
  // encapsulation: ViewEncapsulation.Emulated //None, Native per evitare incapsulamento css
})
export class ButtonScComponent {
  @Input() nomeButton: String='deafault';
  @Input() colorButton: String= 'orange'

}
