import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { ApiClient } from "../services/axios.service"
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public search:string = '';
  public movies = [];
  // behuzzok a apiclientet
  private apiClient: ApiClient;

  // definináljuk a apiclientet constructorként
  constructor( apiClient: ApiClient ) {
    this.apiClient = apiClient
    document.cookie = "XSRF-TOKEN=server-generated-token";

  }

  // componensen belül meghívjuk a apiClientel a getes Methodot a lenti alapján
  public async  getdata(){
    try {
      this.movies =  await this.apiClient.get<any>({
      url:'http://localhost:3000/data',
        params: {
        _limit: 10,
        q: this.search
      }
    })
    }
    catch (error) {
    console.log(error)
    }
    console.log(this.movies)
  }

}
