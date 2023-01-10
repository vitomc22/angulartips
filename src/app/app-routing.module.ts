import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'courses'}, //estou dizendo aqui que se a URL estiver vazia, iremos carregar a url /courses automaticamente
  {
    path:'courses',
   loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
