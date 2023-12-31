import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesStore} from '../services/courses.store';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;


  constructor(private coursesStore: CoursesStore) {

  }

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {

    // this.loadingService.loadingOn()
    // const courses$ = this.coursesService.loadAllCourses()
    //   .pipe(
    //     map(courses => courses.sort(sortCoursesBySeqNo)),
    //     finalize(()=> this.loadingService.loadingOff())
    //   );


    // const courses$ = this.coursesService.loadAllCourses()
    //   .pipe(
    //     map(courses => courses.sort(sortCoursesBySeqNo)),
    //     catchError(err => {
    //       const message = "Could not load courses";
    //       this.messagesService.showErrors(message);
    //       console.error(message, err);
    //       return throwError(err);
    //     })
    //   );

    // const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);

    // this.beginnerCourses$ = loadCourses$
    //   .pipe(
    //     map(courses => courses.filter(course => course.category === 'BEGINNER'))
    //   )
    //
    // this.advancedCourses$ = loadCourses$
    //   .pipe(
    //     map(courses => courses.filter(course => course.category === 'ADVANCED'))
    //   )


    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');

    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }



}




