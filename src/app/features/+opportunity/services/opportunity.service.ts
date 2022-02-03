import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIData } from "@core/api";
import { environment } from "@core/environment";
import { catchOffline } from "@ngx-pwa/offline";
import { map, Observable } from "rxjs";
import { Opportunity } from "../models/opportunity.model";


@Injectable({
  providedIn : 'root'
})
export class OpportunityService {

  constructor( private httpClient : HttpClient) {

  }


    /**
   * Get a list of slides from the API
   */
     getSlides(): Observable<Opportunity[]> {

      return this.httpClient.get<APIData<Opportunity[]>>(`${environment.apiUrl}/ws/opportunities/boosted`).pipe(
        map((response : APIData<Opportunity[]>) => response.data),
      );

    }


      /**
   * Get a list of movies from the API
   */
  getOpportunities(): Observable<Opportunity[]> {

    return this.httpClient.get<APIData<Opportunity[]>>(`${environment.apiUrl}/ws/opportunities/boosted`).pipe(
      map((response) => response.data),
      catchOffline(),
    );

  }
}
