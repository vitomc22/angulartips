import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    CoursesComponent //NÃO ESQUECER DE DECLARAR O MUDULO AQUI, SE NAO OS COMPONENTES NAO ENXERGAM A CLASSE DENTRO DE CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule, //módulo de roteamento do angular
    AppMaterialModule
  ],

})
export class CoursesModule { }
