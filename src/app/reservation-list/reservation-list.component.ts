import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-reservation-list',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {

}
