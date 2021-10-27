import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return  this.httpClient.get<Course[]>(this.API) //Criamos um observable, com generics do tipo Course que é lista
    .pipe(
      first(), //somente pegar o dado uma fez
      delay(5000), //atrasando o recebimento de proposito para testar o spinner
      tap(courses => console.log(courses))); //pipe para coleta dos dados e tap para usar log de forma reativa
  }
}
