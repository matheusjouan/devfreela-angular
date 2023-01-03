import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser } from 'src/app/request/ICreateUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(payload: ICreateUser) {
    return this.http.post('https://622cd1e6087e0e041e147214.mockapi.io/api/users', payload);
  }
}
