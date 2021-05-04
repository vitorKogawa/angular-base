import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './components/courses/course-list.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { EditCourseComponent } from './components/edit-courses/EditCourseComponent.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ReplacePipe,
    NavbarComponent,
    Error404Component,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id', component: EditCourseComponent
      },
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      {
        path: '**',
        component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
