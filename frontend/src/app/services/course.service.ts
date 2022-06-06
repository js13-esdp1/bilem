import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, environment as env } from '../../environments/environment';
import { CommentData, Course, CourseData, Lesson } from '../models/course.model';
import { map } from 'rxjs';
import { Module } from '../models/module.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  fetchCourses() {
    return this.http.get<Course[]>(env.apiUrl + '/courses').pipe(
      map(response => {
        return response.map(courseData => {
          return new Course(
            courseData._id,
            courseData.title,
            courseData.description,
            courseData.information,
            courseData.author,
            courseData.students,
            courseData.modules,
            courseData.subcategory,
            courseData.price,
            courseData.image,
            courseData.is_free,
            courseData.rate,
            courseData.is_published,
          );
        });
      })
    );
  }

  getUserCourses(id: string) {
    return this.http.get<Course[]>(env.apiUrl + '/courses?user=' + id).pipe(
      map(response => {
        return response.map(courseData => {
          return new Course(
            courseData._id,
            courseData.title,
            courseData.description,
            courseData.information,
            courseData.author,
            courseData.students,
            courseData.modules,
            courseData.subcategory,
            courseData.price,
            courseData.image,
            courseData.is_free,
            courseData.rate,
            courseData.is_published,
          );
        });
      })
    );
  }

  getCoursesByCategory(id: string) {
    return this.http.get<Course[]>(env.apiUrl + '/courses?category=' + id).pipe(
      map(response => {
        return response.map(courseData => {
          return new Course(
            courseData._id,
            courseData.title,
            courseData.description,
            courseData.information,
            courseData.author,
            courseData.students,
            courseData.modules,
            courseData.subcategory,
            courseData.price,
            courseData.image,
            courseData.is_free,
            courseData.rate,
            courseData.is_published,
          );
        });
      })
    );
  }

  getCoursesBySubcategory(id: string) {
    return this.http.get<Course[]>(env.apiUrl + '/courses?subcategory=' + id).pipe(
      map(response => {
        return response.map(courseData => {
          return new Course(
            courseData._id,
            courseData.title,
            courseData.description,
            courseData.information,
            courseData.author,
            courseData.students,
            courseData.modules,
            courseData.subcategory,
            courseData.price,
            courseData.image,
            courseData.is_free,
            courseData.rate,
            courseData.is_published,
          );
        });
      })
    );
  }

  createCourse(courseData: CourseData) {
    const formData = new FormData();

    Object.keys(courseData).forEach(key => {
      if (courseData[key] !== null) {
        formData.append(key, courseData[key]);
      }
    });
    return this.http.post<Course>(env.apiUrl + '/courses', formData);
  }

  addModules(moduleData: Module, id: string) {
    return this.http.post<Module>(env.apiUrl + `/courses/course/${id}`, moduleData);
  };

  search(courseData: {}) {
    return this.http.post<Course[]>(env.apiUrl + `/courses/search`, courseData).pipe(
      map(response => {
        return response.map(courseData => {
          return new Course(
            courseData._id,
            courseData.title,
            courseData.description,
            courseData.information,
            courseData.author,
            courseData.students,
            courseData.modules,
            courseData.subcategory,
            courseData.price,
            courseData.image,
            courseData.is_free,
            courseData.rate,
            courseData.is_published,
          );
        });
      })
    );
  }

  getCourseById(id: string) {
    return this.http.get<Course | null>(env.apiUrl + '/courses/' + id).pipe(
      map(response => {
        if (response) {
          return new Course(
            response._id,
            response.title,
            response.description,
            response.information,
            response.author,
            response.students,
            response.modules,
            response.subcategory,
            response.price,
            response.image,
            response.is_free,
            response.rate,
            response.is_published,
          );
        }
        return null;
      })
    );
  }

  addLearningCourses(id: string) {
    return this.http.post<string>(environment.apiUrl + `/courses/addCourse`, {course: id}).pipe(
      map(response => {
        return response;
      })
    );
  }

  addFavoriteCourses(id: string) {
    return this.http.post<string>(environment.apiUrl + `/courses/addFavoriteCourse`, {favoriteCourse: id}).pipe(
      map(response => {
        return response;
      })
    );
  }

  removeCourse(id: string) {
    return this.http.delete(env.apiUrl + '/courses/' + id);
  }

  publishCourse(id: string) {
    return this.http.post(`${env.apiUrl}/courses/${id}/publish`, {});
  }

  addLesson(lessonData: Lesson) {
    return this.http.post<Course>(env.apiUrl + `/courses/lesson/${lessonData._id}`, lessonData);
  }

  getLessonData(lessonId: string, action?: string) {
    const url = action ? `/courses/lesson/${lessonId}?action=addToPassed` : `/courses/lesson/${lessonId}`;
    return this.http.get<Lesson | null>(env.apiUrl + url)
      .pipe(map(result => {
        if (!result) {
          return null;
        }

        return new Lesson(result._id, result.title, result.description, result.video, result.comments);
      }));
  }

  addComment(commentData: CommentData) {
    return this.http.post<Course>(env.apiUrl + `/courses/course/lesson/${commentData.lessonId}/addComment`, commentData).pipe(
      map(response => {
        return new Course(
          response._id,
          response.title,
          response.description,
          response.information,
          response.author,
          response.students,
          response.modules,
          response.subcategory,
          response.price,
          response.image,
          response.is_free,
          response.rate,
          response.is_published,
        );
      })
    );
  }

  removeLesson(id: string) {
    return this.http.delete(env.apiUrl + '/courses/lesson/' + id);
  }
}
