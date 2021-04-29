import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { CourseService } from './CouseService';

@Component({
  selector: 'app-course-list',
  templateUrl: './couse-list.component.html',
  styleUrls: ['./course-list.component.css', './filter-field.css'],
})
class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(( course: Course ) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}

export { CourseListComponent };
