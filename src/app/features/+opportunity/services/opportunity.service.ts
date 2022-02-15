import { HttpClient } from "@angular/common/http";
import { Inject, Injectable , LOCALE_ID } from "@angular/core";
import { APIData } from "@core/api";
import { environment } from "@core/environment";
import { catchOffline } from "@ngx-pwa/offline";
import { map, Observable, Subject, tap } from "rxjs";
import { Opportunity } from "../models/opportunity.model";


@Injectable({
  providedIn : 'root'
})
export class OpportunityService {

  constructor( private httpClient : HttpClient , @Inject(LOCALE_ID) public locale: string) {

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


   /**
   * Get a list of search opps from the API
   */
         getSeacrhOpportunities(offset: number , limit : number): Observable<Opportunity[]> {
          let param: any = {'offset': offset , 'limit' : limit , 'locale' : this.locale};
          return this.httpClient.get<APIData<Opportunity[]>>(`${environment.apiUrl}/ws/opportunities`, {params: param}).pipe(
            map((response) => response.data),
            catchOffline(),
          );

        }


        contactsChange$ = new Subject<Opportunity[]>();
        private contactsList : Opportunity[] = [];

      getContacts(offset: number , limit : number){
      let param: any = {'offset': offset , 'limit' : limit , 'locale' : this.locale};
      return this.httpClient.get<APIData<Opportunity[]>>(`${environment.apiUrl}/ws/opportunities`, {params: param}).pipe(tap(response => {
        this.contactsList = response.data;
        this.contactsChange$.next(this.contactsList);
      }));
    }

      addContact(items) {
        this.contactsList.push(items);
        this.contactsChange$.next(this.contactsList);
      }
}
