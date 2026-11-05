import { Component, input, output } from '@angular/core';
import { People } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {
  // STEP5: declaramos el componente que dibuja en la interfaz de usuario un personaje a partir del "people" que recibe como input
  people = input<People>();

  // STEP6: declaramos también una propiedad de tipo output que nos va a permitir lanzar un evento personalizado, es decir, custom para detectar en el componente padre cuando se ha hecho clic en el personaje
  peopleClicked = output<string>();
  id: string = '';

  // la URL tiene la forma https://swapi.dev/api/people/1/ , por lo que el ID está en la posición 5
  getPeopleId() {
    this.id = this.people()?.url.split("/")[5]!;
    return this.id;
  }

  // STEP8: defino el evento que gestiona haber hecho clic sobre el componente personaje en este componente Hijo
  // y este evento, lo que tiene que hacer es emitir un nuevo valor por el output.
  emitPeopleClicked() {
    const id = this.getPeopleId();
    this.peopleClicked.emit(id);
  }
}
