import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectItem } from 'src/app/interfaces/IProjectItem';

@Injectable({
  providedIn: 'root'
})
export class CreateEditService {

  constructor(private http: HttpClient) { }

  public getProjectById(id: string) : Observable<IProjectItem> {
    return this.http.get<IProjectItem>(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${id}`);
  }

  public createProject(project: IProjectItem) {
    return this.http.post('https://622cd1e6087e0e041e147214.mockapi.io/api/projects/', project);
  }

  public editProject(project: IProjectItem, id: string) {
    return this.http.put(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${id}`, project);
  }
}
