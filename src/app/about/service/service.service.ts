import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = `${ environment.url }/users`;
  constructor(private http: HttpClient ) { }

  getUser() {
    return this.http.get(this.url);
  }
}
