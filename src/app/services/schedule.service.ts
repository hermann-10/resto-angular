import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../models/schedule.interface';
import { EveningEvent } from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  search(term): Observable<EveningEvent[]>{
    console.log('search');
    return this.httpClient
                .get<Schedule>('assets/schedules.json')
                .pipe(
                  map(res => res.events.filter(evt => evt.title.indexOf(term) > -1 || evt.description.toLocaleLowerCase().indexOf(term) > -1)),
                  tap(filteredEvents => console.log('filteredEvents', filteredEvents))
                );
  }
}
