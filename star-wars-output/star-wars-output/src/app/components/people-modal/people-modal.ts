import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-modal',
  styleUrl: './people-modal.css',
  templateUrl: './people-modal.html',
})
export class PeopleModal {
  // STEP11: hemos declarado un componente para el modal que se va a abrir cuando pulse en el detalle de un personaje
  // para poder hacer uso de la clase que controlan los modales en angular bootstrap, tengo que declarar mediante inyección de dependencia la siguiente variable.
  activeModal = inject(NgbActiveModal);

  // Además declaro como parámetro de entrada al modal el objeto People
  @Input() peopleDetail: People | undefined;
}
