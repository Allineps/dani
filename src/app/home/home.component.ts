import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CarouselModule} from "ngx-bootstrap/carousel";
import { NavbarComponent } from "../navbar/navbar.component"
import {ApiClient} from "../services/axios.service";
import {NgForOf, NgIf} from "@angular/common";
import {data} from "../data-type";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterLink,
        CarouselModule,
        NavbarComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  // defináljuk az adatokat  data[] structura mit várunk a vissza térő adatban
      caruselpic: undefined | data[]

    private apiClient: ApiClient;
    constructor( apiClient: ApiClient ) {
        this.apiClient = apiClient

        document.cookie = "XSRF-TOKEN=server-generated-token";

    }
    async ngOnInit(){
      // oldal betöltéskor fusson le
          try {
              this.caruselpic =  await this.apiClient.get<any>({
                  url:'http://localhost:3000/data',
                  params: {
                      _limit: 10
                  }
              })
          }
          catch (error) {
              console.log(error)
          }
          console.log(this.caruselpic)
      }

  }

