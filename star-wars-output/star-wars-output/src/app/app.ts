import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleListComponent } from './components/people-list-component/people-list-component';

@Component({
  imports: [RouterOutlet, PeopleListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('star-wars-output');
}
