import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses$: Observable <Course[]>;

  displayedColumns = ['category','name'];



  constructor(private CoursesService: CoursesService,
              public dialog: MatDialog
    ) {


    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos!')
        return of([])
      })

    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
