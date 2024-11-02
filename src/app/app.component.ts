import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableDemoComponent } from './table-demo/table-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularMaterialTable';
}
