import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'https://fosteman-mongo-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + 'employees');
  }
}
