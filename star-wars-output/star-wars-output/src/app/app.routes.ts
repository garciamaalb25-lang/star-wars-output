import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list-component/people-list-component';

export const routes: Routes = [
    // STEP1: he creado los componentes y a continuación las rutas que navegan a esos componentes
    // en este caso solo tenemos una página que es la de People List
    {path: 'people-list', component: PeopleListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/people-list'}
];
