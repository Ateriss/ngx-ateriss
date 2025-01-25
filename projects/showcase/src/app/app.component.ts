import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxAterissInputComponent } from '../../../ngx-ateriss/components/input';
import { NgxAterissSelectComponent } from "../../../ngx-ateriss/components/select/select.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxAterissInputComponent, NgxAterissSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showcase';
}
