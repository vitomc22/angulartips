import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Course[]>(this.API) //Criamos um observable, com generics do tipo Course que é lista
      .pipe(
        first(), //somente pegar o dado uma fez
        tap((courses) => console.log(courses))
      ); //pipe para coleta dos dados e tap para usar log de forma reativa
  }

  save(record: Partial<Course>) {
    //partial significa que aceito o objeto incompleto, sem todos os atributos, tipo um DTO ou optional
    if(record._id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
  }

  delete(id: String) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  loadByid(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }
}
