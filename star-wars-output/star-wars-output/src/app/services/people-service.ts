import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse, People } from '../interfaces/people-list-response';

// STEP4: crear el servicio que hará la petición sobre People (personajes de Star Wars)
@Service()
export class PeopleService {
    http = inject(HttpClient);

    getAll(): Observable<PeopleListResponse> {
        return this.http.get<PeopleListResponse>('https://swapi.dev/api/people/');
    }

    // STEP4: declaro, en mi servicio, un nuevo método que me obtiene la información
    // de un personaje a partir del ID de ese personaje.
    getOne(id: string): Observable<People> {
        return this.http.get<People>(`https://swapi.dev/api/people/${id}/`);
    }
}
