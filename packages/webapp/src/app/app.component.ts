import { Component } from '@angular/core';
import { Person } from '@experimental/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = new Person('Web', 'App').toString().replace(/\s+/, '').toLowerCase(); // todo: temporary
}
