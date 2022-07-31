import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { tap } from 'rxjs/operators';


export interface LinkName {
  heroes: string;
  dashboard: string;
}

@Injectable({
  providedIn: 'root'
})

export class JsonFileService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getLinkName(): Observable<LinkName> {
    return this.http.get<LinkName>('/assets/data/dashboard-link.json').pipe(
      tap(_=> this.log('fetched LinkName'))
    )
  }
  

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add('JsonFileService: ' + message);
    }
}
