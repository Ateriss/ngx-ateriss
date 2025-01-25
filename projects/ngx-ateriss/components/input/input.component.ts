import { Component } from '@angular/core';

@Component({
  selector: 'ateriss-input',
  standalone: true,
  imports: [],
  template: `
    <input>
    <label><ng-content></ng-content></label>
  `,
  styles: ``
})
export class NgxAterissInputComponent {

}
