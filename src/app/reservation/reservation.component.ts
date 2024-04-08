import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

}
