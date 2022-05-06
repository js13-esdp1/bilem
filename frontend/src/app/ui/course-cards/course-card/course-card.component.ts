import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/types';
import { publishCourseRequest, removeCourseRequest } from '../../../store/course/course.actions';
import { Course } from '../../../models/course.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() is_free!: boolean;

  learning = false;
  user: Observable<null | User>;
  userSub!: Subscription;

  removeLoading: Observable<boolean>;
  toBeDeletedCourse = '';

  publishLoading: Observable<boolean>;
  publishSub!: Subscription;
  toBePublishCourse = '';

  constructor(private store: Store<AppState>) {
    this.user = store.select(state => state.users.user);
    this.removeLoading = store.select(state => state.courses.removeLoading);
    this.publishLoading = store.select(state => state.courses.publishLoading);
  }

  ngOnInit(): void {
    this.userSub = this.user.subscribe(user => {
      if (user) {
        user.myCourses.forEach(course => {
          if (course._id === this.course._id) {
            this.learning = true;
          }
        });
      }
    })
    this.publishSub = this.publishLoading.subscribe(isPublish => {
      if (!isPublish) {
        this.toBePublishCourse = '';
      }
    });
  }

  removeCourse(id: string, event: Event) {
    event.stopPropagation();
    this.toBeDeletedCourse = id;
    this.store.dispatch(removeCourseRequest({id}));
  }

  publishCourse(id: string, event: Event) {
    event.stopPropagation();
    this.toBePublishCourse = id;
    this.store.dispatch(publishCourseRequest({id}));
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.publishSub.unsubscribe();
  }
}