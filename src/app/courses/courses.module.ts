import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent //NÃO ESQUECER DE DECLARAR O MUDULO AQUI, SE NAO OS COMPONENTES NAO ENXERGAM A CLASSE DENTRO DE CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule, //módulo de roteamento do angular
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],

})
export class CoursesModule { }
