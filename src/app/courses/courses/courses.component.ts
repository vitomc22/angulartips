import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses: Course[]  = [  //seria o mesmo que new Course, declarando objeto
    {  _id:'1', name:'Angular', category:'front-end'  }
  ];

  displayedColumns = ['category','name'];

  constructor() {

  }

  ngOnInit(): void {
  }

}
