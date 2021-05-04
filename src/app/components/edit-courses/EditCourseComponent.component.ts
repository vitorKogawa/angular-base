import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './EditCourseComponent.component.html'
})

export class EditCourseComponent implements OnInit{
  courseId: number;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
  }
}
