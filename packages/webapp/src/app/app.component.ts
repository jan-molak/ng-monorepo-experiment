import { Component } from '@angular/core';
import { Person } from '@experimental/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = new Person('Web', 'App');
}
