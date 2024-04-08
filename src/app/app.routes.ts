import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: ReservationComponent
  },
  {
    path: 'list',
    component: ReservationListComponent
  }
];
