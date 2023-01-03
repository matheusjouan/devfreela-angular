import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectItem } from 'src/app/interfaces/IProjectItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProject() : Observable<IProjectItem[]> {
    return this.http.get<IProjectItem[]>('https://622cd1e6087e0e041e147214.mockapi.io/api/projects');
  }

  deleteProject(id: string) {
    return this.http.delete(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${id}`);
  }
}
