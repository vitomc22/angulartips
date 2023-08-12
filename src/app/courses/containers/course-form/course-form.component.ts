import { Course } from './../../model/course';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from './../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  //declarando e inicializando tipo de formulario e validadores
  form = this.formBuilder.group({
    _id: [''],
    name: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
    ],
    category: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category,
    });
    console.log(course);
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open('Cadastrado com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório!';
    }

    if (field?.hasError('minLength')) {
      const requiredLength = field.errors
        ? field.errors['minLength']['requiredLength']
        : 1;
      return `Mímino de ${requiredLength}  caracteres.`;
    }

    if (field?.hasError('maxLength')) {
      const requiredLength = field.errors
        ? field.errors['maxLength']['requiredLength']
        : 100;
      return `Máximo de ${requiredLength}  caracteres.`;
    }

    return 'Campo inválido';
  }
}
