import { Injectable } from '@angular/core';
import { Course } from './Course';

@Injectable({
  providedIn: 'root',
})
class CourseService {
  retrieveAll(): Course[] {
    return COURSES;
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Javascript - Básico ao Avançado',
    imageUrl: './../../assets/img/javascript.svg',
    price: 150.99,
    code: 'ABC-1111',
    duration: 360.0,
    rating: 4.5,
    releaseDate: 'December, 2, 2019',
  },
  {
    id: 2,
    name: 'Typescript - Intermediário ao Profissional',
    imageUrl: './../../assets/img/typescript.svg',
    price: 80.0,
    code: 'DEF-2222',
    duration: 80.0,
    rating: 4.2,
    releaseDate: 'December, 2, 2019',
  },
  {
    id: 3,
    name: 'React.js - Júnior a Sênior',
    imageUrl: './../../assets/img/react.svg',
    price: 250.99,
    code: 'GHI-3333',
    duration: 120.0,
    rating: 5.0,
    releaseDate: 'December, 2, 2019',
  },
];

export { CourseService };
