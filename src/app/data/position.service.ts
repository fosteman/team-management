import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http'

import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = 'https://fosteman-mongo-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.url + 'positions');
  }
}
