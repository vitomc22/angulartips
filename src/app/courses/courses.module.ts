import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';



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
