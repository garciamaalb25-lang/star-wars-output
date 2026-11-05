import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { People } from '../../interfaces/people-list-response';
import { PeopleItemComponent } from '../people-item-component/people-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleModal } from '../people-modal/people-modal';

// STEP2: generación de components ng g c components/....
@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {

  peopleService = inject(PeopleService);
  peopleList = signal<People[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(resp => {
      this.peopleList.set(resp.results);
    });
  }

  // STEP10: en este método voy a recibir el ID del personaje, que me ha enviado por el output el componente Hijo
  // y voy a abrir un modal con la información de ese personaje
  openPeopleModal(id: string) {
    // definimos la llamada al servicio PeopleService, que me devuelve la información de un personaje a partir de su ID
    this.peopleService.getOne(id).subscribe(resp => {

      // STEP12: abro el modal que está declarado en el componente PeopleModal y le paso la información del detalle que he recibido de la API
      const modalRef = this.modalService.open(PeopleModal);
      modalRef.componentInstance.peopleDetail = resp;
    });

  }
}
